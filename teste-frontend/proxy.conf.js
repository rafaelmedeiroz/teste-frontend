const  PROXY_CONFIG  = [
  {
    context : '/backend',
    target :  'http://localhost:8080/' ,
    pathRewrite:{'^/backend':''}
  }
];
module . exports  =  PROXY_CONFIG ;
