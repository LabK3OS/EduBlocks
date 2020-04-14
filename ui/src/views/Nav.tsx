import React = require('preact');
import { Component } from 'preact';

interface Props {
  platformImg?: string;

  openSamples(): void;
  openExtensions?(): void;
  openThemes(): void;
  // downloadPython(): void;
  downloadHex?(): void;
  downloadPython?(): void;
  onFunction(): void;
  openPlatforms(): void;
  modeQuestion(): void;

  newCode(): void;
  openCode(): void;
  saveCode(): void;
  openTerminal?(): void;

  onFileChange(fileName: string): void;

  sync: boolean;
}

export default class Nav extends Component<Props, {}> {
  public render() {
    const { openExtensions, downloadHex, openTerminal: sendCode, downloadPython } = this.props;

    return (
      <nav>
        <a class='brand' onClick={() => this.props.modeQuestion()} data-tooltip="Change Mode">
          {this.props.platformImg && <img src={this.props.platformImg} class='Nav__platformImg' height={50} />}

          <img class='logo' src='/images/edublock-logo_Final_edublocks_white.svg' />
          
        </a>
            <input class="brand" type="email" placeholder="Nuevo_Proyecto" style="width: 200px !important; color:black; margin-left: 5px" onChange={(e) => this.props.onFileChange((e.target as any).value)}></input>
            <input id='bmenub' type='checkbox' class='show' />
            <label for='bmenub' class='burger pseudo button icon-menu'></label>

            
            <div class='menu'>
              
              <a class='button icon-plus' title="Crear un nuevo proyecto" href='javascript:void(0)' onClick={() => this.props.newCode()}>
                Nuevo
          </a>

              <a class='button icon-folder-open' title="Abrir un proyecto" href='javascript:void(0)' onClick={() => this.props.openCode()}>
                Abrir
          </a>

              <a class='button icon-floppy' title='Guardar el proyecto' href='javascript:void(0)' onClick={() => this.props.saveCode()}>
                Guardar
          </a>

              {downloadHex &&
                <a class='button icon-flash' title='Download file to flash to micro:bit' href='javascript:void(0)' onClick={() => downloadHex()}>
                  Download Hex
            </a>
              }

              {downloadPython &&
                <a class='button icon-download' title='Download Python Source Code' href='javascript:void(0)' onClick={() => downloadPython()}>
                  Descargar
          </a>
              }


              {/*<a class='button' title='Themes' href='javascript:void(0)' onClick={() => this.props.openThemes()}>
            Themes
          </a>*/}

              {openExtensions &&
                <a class='button icon-puzzle' title='Extensions' href='javascript:void(0)' onClick={() => openExtensions()}>
                  Extensions
            </a>
              }

              <a class='button icon-book' title='Ejemplos' href='javascript:void(0)' onClick={() => this.props.openSamples()}>
                Ejemplos
          </a>

              <a class='button icon-cog' title="Configuración" href='javascript:void(0)' onClick={() => this.props.onFunction()}>
                Configuración
          </a>

              {sendCode &&
                <a class='button icon-play button-green' title='Ejecutar el programa' href='javascript:void(0)' onClick={() => sendCode()}>
                  Ejecutar
            </a>
              }

            </div>
      </nav>
          );
        }
      }
