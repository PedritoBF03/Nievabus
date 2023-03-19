// import jenkins-auto-approve-script.groovy

job('Job-pNievabus') {
    description('Job Padre para crear una tarea Hija que despliegue la App Nievabus 2')
    scm {
        git('https://github.com/PedritoBF03/Nievabus.git', 'master') {
            node ->
                node / gitConfigName('PedritoBF03')
                node / gitConfigEmail('pedrobf2003@gmail.com')
        }
    }
    triggers {
        //  scm('H/5 * * * *')
        githubPush()
    }

    steps {
        shell("sh levantar-api.sh")
    }
}