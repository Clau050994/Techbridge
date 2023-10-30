{ pkgs }: {
  deps = [
    pkgs.python39Packages.clvm-tools
    pkgs.nano
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}