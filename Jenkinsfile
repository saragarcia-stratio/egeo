@Library('libpipelines@feature/multibranch') _

hose {
    EMAIL = 'front'
    MODULE = 'egeo'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'egeo'
        
    DEV = { config ->
    
        doCompile(config)
        doUT(config)
        doPackage(config)
        doDeploy(config)

    }
}
