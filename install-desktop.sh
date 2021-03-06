#!/bin/bash

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

SCRIPT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

EXTRACT_PATH=$SCRIPT_PATH

APP_PATH=$EXTRACT_PATH/app

INSTALL_PATH=/opt/edublocks-desktop
GLOBAL_BIN_PATH=/usr/local/bin

sudo mkdir -p $INSTALL_PATH

sudo cp -r $APP_PATH/* $INSTALL_PATH

echo "Copying the icon..."
sudo cp $APP_PATH/ui/images/desktoplogo.png /usr/share/icons/hicolor/scalable/apps/desktoplogo.png

echo "Making the program visible in the menu..."
sudo cp $APP_PATH/edublocks-desktop.desktop /usr/share/applications

echo "Creating symlinks..."

sudo rm -f $GLOBAL_BIN_PATH/edublocks-desktop
sudo rm -f $GLOBAL_BIN_PATH/edublocks-startup-enable
sudo rm -f $GLOBAL_BIN_PATH/edublocks-startup-disable
sudo rm -f $GLOBAL_BIN_PATH/edublocks-desktop-uninstall

sudo ln -s $INSTALL_PATH/scripts/start.sh            $GLOBAL_BIN_PATH/edublocks-desktop
sudo ln -s $INSTALL_PATH/server/startup-enable.sh   $GLOBAL_BIN_PATH/edublocks-startup-enable
sudo ln -s $INSTALL_PATH/server/startup-disable.sh  $GLOBAL_BIN_PATH/edublocks-startup-disable
sudo ln -s $INSTALL_PATH/scripts/uninstall.sh       $GLOBAL_BIN_PATH/edublocks-desktop-uninstall
