@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    secretScannerExclusion: '.*squid.yaml\$',
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subsquid',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:20-alpine',
    sonarProjectName:   'sora-subsquid',
    sonarProjectKey:    'jp.co.soramitsu:sora-subsquid',
    preBuildCmds:       ['npm i -g sqd-cli', 'npm ci --include=dev'],
    buildCmds:          ['NODE_OPTIONS=--max-old-space-size=4096 npm run build']
)
pipeline.runPipeline()
