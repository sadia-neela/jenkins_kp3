pipeline {
    agent any

    tools {
        nodejs 'nodejs new' 
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
                bat 'npx wdio run wdio.conf.js'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
    }
}