
module.exports={
  entry:'./test/index.ts',
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.ts?$/,loader:'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    target: 'node'
    
    
    
};