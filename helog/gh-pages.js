const { publish } = require("gh-pages");


publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/heunyam/heunyam.github.io.git', 
        user: {
            name: 'heunyam',
            email: 'tpwns072@gmail.com',
        },
        dotfiles: true,
    },
    () => {
        console.log('Deploy Complete');
    }
);