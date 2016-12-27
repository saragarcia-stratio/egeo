@Library('libpipelines@master') _

hose {
    EMAIL = 'front'
    MODULE = 'egeo'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'bitbucket.org/egeo'

    DEV = { config ->

        doCompile(config)
        doUT(config)
        doPackage(config)

        parallel(QC: {
            doStaticAnalysis(config)
        }, DEPLOY: {
            doDeploy(config)
        }, failFast: config.FAILFAST)

    }
}
