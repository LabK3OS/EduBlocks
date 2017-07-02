import React = require('preact');
import { Component } from 'preact';

import Nav from './Nav';
import BlocklyView from './BlocklyView';
import PythonView from './PythonView';
import TerminalView from './TerminalView';
import FileListModal from './FileListModal';

import { App } from '../types';

const ViewModeBlockly = 'blockly';
const ViewModePython = 'python';

type ViewMode = typeof ViewModeBlockly | typeof ViewModePython;

interface PageProps {
  app: App;
}

interface DocumentState {
  xml: string | null;
  python: string | null;
  pythonClean: boolean;
}

interface PageState {
  viewMode: ViewMode;
  terminalOpen: boolean;
  samplesOpen: boolean;

  doc: Readonly<DocumentState>;
}

export default class Page extends Component<PageProps, PageState> {
  private blocklyView: BlocklyView;
  private pythonView: PythonView;
  public terminalView: TerminalView;

  constructor() {
    super();

    this.state = {
      viewMode: ViewModeBlockly,
      terminalOpen: false,
      samplesOpen: false,

      doc: {
        xml: null,
        python: null,
        pythonClean: true,
      },
    };
  }

  private readBlocklyContents(xml: string) {
    if (this.state.doc.xml === xml) { return; }

    const doc: DocumentState = {
      xml,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc });

    this.switchView(ViewModeBlockly);
  }

  private updateFromBlockly(xml: string, python: string) {
    if (
      this.state.doc.xml === xml &&
      this.state.doc.python === python
    ) {
      return;
    }

    if (this.state.doc.python !== python && !this.state.doc.pythonClean) {
      alert('Python changes have been overwritten!');
    }

    const doc: DocumentState = {
      xml,
      python,
      pythonClean: true,
    };

    this.setState({ doc });
  }

  private updateFromPython(python: string) {
    if (this.state.doc.python === python) { return; }

    const doc: DocumentState = {
      xml: this.state.doc.xml,
      python,
      pythonClean: false,
    };

    this.setState({ doc });
  }

  private new() {
    const doc: DocumentState = {
      xml: null,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc });

    this.switchView('blockly');
  }

  protected componentDidMount() {

  }

  private toggleView(): 0 {
    switch (this.state.viewMode) {
      case ViewModeBlockly:
        return this.switchView(ViewModePython);

      case ViewModePython:
        return this.switchView(ViewModeBlockly);
    }
  }

  private switchView(viewMode: ViewMode): 0 {
    switch (viewMode) {
      case ViewModeBlockly:
        if (!this.state.doc.pythonClean && this.state.doc.xml === null) {
          alert('Block view not available');

          return 0;
        }

        this.setState({ viewMode: 'blockly' });

        return 0;

      case ViewModePython:
        this.setState({ viewMode: 'python' });

        return 0;
    }
  }

  private sendCode() {
    if (!this.terminalView) { throw new Error('No terminal'); }

    if (!this.state.doc.python) {
      alert('There is no code to run');

      return;
    }

    this.setState({ terminalOpen: true });
    this.terminalView.focus();

    this.props.app.runCode(this.state.doc.python);

    setTimeout(() => this.terminalView.focus(), 250);
  }

  private onBlocklyChange(xml: string, python: string) {
    this.updateFromBlockly(xml, python);
  }

  private onPythonChange(python: string) {
    this.updateFromPython(python);
  }

  private async openFile() {
    const xml = await this.props.app.openFile();

    this.readBlocklyContents(xml);
  }

  private async saveFile() {
    const xml = this.state.doc.xml;

    if (xml) {
      await this.props.app.saveFile(xml, 'xml');
    }
  }

  private async downloadPython() {
    const python = this.state.doc.python;

    if (python) {
      await this.props.app.saveFile(python, 'py');
    }
  }

  private openSamples() {
    this.setState({ samplesOpen: true });
  }

  private closeSamples() {
    this.setState({ samplesOpen: false });
  }

  private selectSample(file: string) {
    this.closeSamples();

    const xml = this.props.app.getSample(file);

    this.readBlocklyContents(xml);
  }

  private onTerminalClose() {
    this.setState({ terminalOpen: false });
  }

  public render() {
    return (
      <div id='page'>
        <Nav
          sync={this.state.doc.pythonClean}

          sendCode={() => this.sendCode()}
          downloadPython={() => this.downloadPython()}
          openCode={() => this.openFile()}
          saveCode={() => this.saveFile()}
          newCode={() => this.new()}
          openSamples={() => this.openSamples()} />

        <section id='workspace'>
          <button
            id='toggleViewButton'
            onClick={() => this.toggleView()}>

            {this.state.viewMode}

          </button>

          <BlocklyView
            ref={(c) => this.blocklyView = c}
            visible={this.state.viewMode === 'blockly'}
            xml={this.state.doc.xml}
            onChange={(xml, python) => this.onBlocklyChange(xml, python)} />

          <PythonView
            ref={(c) => this.pythonView = c}
            visible={this.state.viewMode === 'python'}
            python={this.state.doc.python}
            onChange={(python) => this.onPythonChange(python)} />
        </section>

        <TerminalView
          ref={(c) => this.terminalView = c}
          visible={this.state.terminalOpen}
          onClose={() => this.onTerminalClose()} />

        <FileListModal
          files={this.props.app.getSamples()}
          visible={this.state.samplesOpen}
          onOpenFile={(file) => this.selectSample(file)}
          onCancel={() => this.closeSamples()} />
      </div>
    );
  }
}