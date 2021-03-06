const { filter_info } = require('../utils')

const filters = [
    filter_info('comparison', ['(.*?) vs (.*?)', 'comparison', 'difference', 'pros and cons', '\\bor\\b']),
    filter_info('interview', ['interview']),
    filter_info('rust', ['rust']),
    filter_info('articles', [
        'dev articles', 'right programming language', 'software development', 'learn (.*?) code', 'computer memory',
        'modern developer', 'software engineer', 'blogging', 'as a developer', 'developer', 'as a programmer', 'ideas come knocking'
    ]),
    filter_info('devops', ['agile', 'scrum', '\\bci\\b', '\\bcicd\\b', '\\btravis\\b', 'devops', 'jenkins', 'saas']),
    filter_info('apollo', ['apollo']),
    filter_info('deploy', ['deploy']),
    filter_info('spa', ['\\bspa\\b', 'single page application']),
    filter_info('adonis', ['adonis']),
    filter_info('graphql', ['graphql']),
    filter_info('ionic', ['\\bionic\\b']),
    filter_info('next', ['\\next.js\\b']),
    filter_info('wa', ['\\bwa\\b', 'webassembly']),
    filter_info('docker', ['docker', 'dockerfile']),
    filter_info('kubernetes', ['kubernetes']),
    filter_info('express', ['\\bexpress\\b', '\\bexpressjs\\b']),
    filter_info('design_patterns', ['design pattern', '(.*?) pattern']),
    filter_info('gatsby', ['gatsby']),
    filter_info('go', ['\\bgo\\b', 'golang']),
    filter_info('aws', ['aws', 'aws lambda']),
    filter_info('cloud', ['cloud', 'google cloud']),
    filter_info('css', ['css', 'bem', 'css grid', 'flexbox', 'hamburger menu', 'focus ring', 'responsive']),
    filter_info('api', ['api', 'rest']),
    filter_info('design', ['design', '\\b(ux)\\b', 'photos']),
    filter_info('debugging', ['debugging', '\\bbug\\b', 'debug']),
    filter_info('extension', ['chrome extension']),
    filter_info('regex', ['regex', 'regular expression']),
    filter_info('angular', ['angular', 'ngrx']),
    filter_info('nuxt', ['nuxt', 'nuxt.js']),
    filter_info('ui', ['\\bui\\b']),
    filter_info('npm', ['npm']),
    filter_info('vue', ['vue', 'vuex', 'vuetify', 'v\s*(.*?)\s*directive']),
    filter_info('rails', ['rails']),
    filter_info('reactNative', ['react native']),
    filter_info('redux', ['redux']),
    filter_info('react', ['react','hooks', 'props']),
    filter_info('node', ['node.js', 'es modules', 'nodejs']),
    filter_info('frontEnd', ['front end', 'frontend']),
    filter_info('backEnd', ['backend', 'back end']),
    filter_info('chart', ['chart', 'data visualization', 'd3']),
    filter_info('js', ['javascript', '\\bjs\\b', 'ecmascript', 'es6', 'closures', 'async (.*?) await', '\\bthis\\b', 'array reduce', 'first class functions', 'async await', 'promises', 'prototypal inheritance']),
    filter_info('java', ['java', 'hibernate']),
    filter_info('git', ['\\bgit\\b', 'github', 'readme']),
    filter_info('improve', ['better', 'improve', 'optimization', 'performance', 'evolve', 'boost\\s+(.*?)\\s+page', 'code comments', 'the right way', 'master']),
    filter_info('ruby', ['ruby']),
    filter_info('python', ['python']),
    filter_info('webpack', ['webpack']),
    filter_info('puppeteer', ['puppeteer']),
    filter_info('serviceWorker', ['service worker']),
    filter_info('pwa', ['pwa', 'progressive web']),
    filter_info('web', ['web', 'web development', 'websites', 'fonts', 'same origin policy']),
    filter_info('html', ['html', 'custom elements']),
    filter_info('ember', ['\\bember\\b']),
    filter_info('elixir', ['elixir']),
    filter_info('typescript', ['typescript']),
    filter_info('mysql', ['mysql', 'sql']),
    filter_info('algorithms', ['binary tree', 'algorithms', 'trees', 'hash table', 'stack', 'queue', 'recursion', 'linked list', 'competitive programming', 'dynamic programming', 'string permutations']),
    filter_info('code', ['code review']),
    filter_info('scala', ['scala']),
    filter_info('rxjs', ['rxjs']),
    filter_info('blazor', ['blazor']),
    filter_info('flutter', ['flutter']),
    filter_info('electron', ['electron']),
    filter_info('terminal', ['terminal', 'bash']),
    filter_info('mongo', ['mongodb', 'mongoose', 'mongoo']),
    filter_info('OS', ['open source']),
    filter_info('database', ['datasets', 'database']),
    filter_info('mvp', ['MVP', 'minimum viable']),
    filter_info('tips', ['tip', 'trick']),
    filter_info('architecture', ['architecture', 'microservice']),
    filter_info('documentation', ['documentation', '\\bdoc\\b']),
    filter_info('jwt', ['jwt']),
    filter_info('senior', ['senior', 'senior developer']),
    filter_info('junior', ['junior', 'junior developer']),
    filter_info('pbskills', ['problem solving', 'problem solving skills']),
    filter_info('career', ['degree', 'meetup', 'side project', 'communication', 'goals', 'portfolio', 'freelancer']),
    filter_info('code', ['cleaner code', 'better code']),
    filter_info('knowledge', ['what', 'what is', 'learn anything', 'batch', 'understanding', 'plan', 'curl', 'no experience', 'conference', 'language pipeline', 'dotfile', 'makefile', 'password']),
    filter_info('advice', ['stop']),
    filter_info('test', ['testing', 'tdd', 'unit test']),
    filter_info('firebase', ['firebase', 'firestore']),
    filter_info('seo', ['\\bseo\\b']),
    filter_info('protocols', ['https?']),
];


module.exports = filters;