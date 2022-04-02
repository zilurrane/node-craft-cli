const menus = {
    main: `
      node-craft [command] <options>
  
      quote .............. show random quote
      version ............ show package version
      help ............... show help menu for a command`,

    quote: `
      node-craft quote
      `,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}