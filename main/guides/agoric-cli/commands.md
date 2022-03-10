# Agoric CLI Command Reference
Add a command name to `agoric` to specify what command to run.

The `agoric` commands documented here are the ones useful for dapp developers. Other `agoric` commands you may see listed
are not covered in this document.

In general, you want to issue these Agoric CLI commands in this order:
1. `agoric init $projectDir`
2. `cd $projectDir`
3. `agoric install`
4. `agoric start` (Usually with `--reset`)
5. `agoric deploy`
6. `agoric open`

Use `agoric help` whenever you need help with one of the above Agoric CLI commands.

There are some general options for all commands, whose usage is:
```js
agoric [options] [command]
```
They are:
- `-V`, `--version`                                  
  - Output the version number.
- `--docker-tag <tag>`
  - Use the specified tag of any started Docker containers.  Defaults to
    `latest`.
- `--sdk`
  - Use the Agoric SDK containing this program.
- `-v`, `--verbose`
  - Be verbose.  Multiple occurrences increase verbosity.
- `-h`, `--help`
  - Display help for the command.

## `agoric init`
- **Function**: 
  - Creates a new Dapp directory named `<project>` with contents copied from the `dapp-template` argument template.
- **Positional Arguments**:
    - `project`: Name of the new project to initialize.
- **Options**:
    - `--dapp-template <name>`: Use the template specified by `<name>`. Defaults to the demo Dapp `dapp-fungible-faucet`.
    - `--dapp-base <base-url>`: Look under this directory for the Dapp template. Defaults to `git://github.com/Agoric/`
    - `-h`, `--help`: Display help for `init` command.
- **Examples**:
  - Creates a directory named `demo` with contents copied from the default `dapp-template` value `dapp-fungible-faucet`.
	- `agoric init demo`
  - Creates a directory named `my-first-contract` with contents copied from the default `dapp-template` value `dapp-simple-exchange`.
	  - `agoric init my-first-contract --dapp-template dapp-simple-exchange`
  - Creates a directory named `my-contract` with contents copied from a template named `dapp-skeleton` located under the URL `file:///home/contracts`
	  - `agoric init my-contract --dapp-template dapp-skeleton --dapp-base file:///home/contracts` 

## `agoric install`
- **Function**:
  - Install Dapp JavaScript dependencies. This may take a while. You use this instead of established npm install tools.
  The reason is that there is both an SDK (`--sdk`) and NPM mode. Currently we only support SDK mode, which allows you to link your Dapp 
  against the SDK dependencies. This lets you modify in any package in the SDK against the SDK dependencies (and see the changes)
  and not have to register those packages with Yarn or NPM.
- **Positional Arguments**:
  - None.
- **Options**:
  - None.
- **Examples**:
  - Installs Dapp JavaScript dependencies
	- `agoric install`

## `agoric start`
- **Function**:
  - Run an Agoric VM on which contracts will run.
- **Positional Arguments**:
  - `profile`: [optional] Specifies the environment for the VM. Defaults to `dev` for development mode, `testnet` connects to our current testnet.
  - `args`: [optional] Ignore this for now. It currently has no valid values.
- **Options**:
    - `--reset`:  Clear all VM state before starting.
    - `--pull`:  For Docker-based VM, pull the image before running.
    - `--delay [seconds]`: Account for processing time in the simulated chain by delaying each round-trip to it by the specified number of seconds (default `1`, which lets you easily count the number of trips in your head). If this option is not present, then the seconds of delay will be set from the numeric value of a FAKE_CHAIN_DELAY environment variable (or zero if there is no such variable).
    - `--inspect [host[:port]]`: Activate inspector on host:port (default: "127.0.0.1:9229")
    - `--inspect-brk [host[:port]]`:  Activate inspector on host:port and break at start of script (default: "127.0.0.1:9229")
    - `-h`, `--help`: Display help for `start` command
- **Examples**:
  - Restart the Agoric VM, clearing all existing state before doing so.  
    - `agoric start --reset`
  - For Docker-based VM, before running pull the image.
    - `agoric start --pull`
  - Configure a 5 second processing time for each round-trip to the simulated chain.
      - `agoric start --delay 5`

## `agoric deploy`
- **Function**:
  - Run one or more deployment scripts against the local Agoric VM. You may optionally specify which host and port to connect to the VM on.
- **Positional Arguments**:
  - `<script...>`: Deployment script(s) to run against the local Agoric instance. You must specify at least one, and may specify more than one. 
- **Options**:
  - `--hostport <HOST:PORT>`: Host and port on which to connect to the VM.
  - `-h`, `--help`: Display help for `deploy` command
- **Examples**:
  - Run the specified `deploy.js` scripts against the local Agoric VM.
    - `agoric deploy ./contract/deploy.js ./api/deploy.js`
  - Run the specified `deploy.js` scripts on VM host 128.7.3.139 and
    port 99.
    - `agoric deploy --hostport 128.7.3.139:99 ./contract/deploy.js`
    
## `agoric open`
- **Function**:
  - Launch the Agoric UI. By default, it shows only the UI and not the REPL. To show either
    both the UI and REPL, or only the REPL, see the `--repl` option below.
- **Positional Arguments**
  - None
- **Options**
  - `--hostport <host:port>`: Host and port on which to connect to the VM (default: "127.0.0.1:8000").
  - `--no-browser`: Display the UI's URL, but don't open a browser.
  - `--repl [yes | only | no]`:  Whether to show the Read-Eval-Print loop. Defaults to `yes` if specified (see
    Examples below)
  - `-h`, `--help`: Display help for `open` command.
- **Examples**
  - Launch only the Agoric UI in a browser
    - `agoric open`
  - Display the Agoric UI's URL, but don't open it in a browser.
    - `agoric open --no-browser`
  - Display only the REPL for the Agoric UI in a browser.
    - `agoric open --repl only`
  - Display both the Agoric UI and the REPL in a browser (`--repl` defaults to `yes`).
    - `agoric open --repl`

## `agoric help`
- **Function**:
  - Displays the Agoric CLI commands and arguments with brief descriptions.
- **Positional Arguments**:
  - None
- **Options**:
  - `-V`, `--version`: Output Agoric's version number.
  - `--sdk`: Use the Agoric SDK containing this program.
  - `-v`, `--verbose`: Output a more detailed version of help (note: only for some commands)
  - `-h`, `--help`: display help for command
- **Examples**:
  - Display Agoric CLI commands with brief descriptions.
    - `agoric help`
  - Display current Agoric version number
    - `agoric -V help`
  - Display verbose help for an Agoric command
    - `agoric start -h -v`
  - Display verbose general help
    - `agoric help -v`
