pipeline {
    agent any

    tools {
        nodejs 'nodejs new'
    }

    parameters {
        string(name: 'LABEL', defaultValue: 'smoke', description: 'Enter label value')
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/sadia-neela/jenkins_kp3.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat """
                set LABEL=%LABEL%
                npx wdio run wdio.conf.js
                """
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
        }
    }
}
