
/*Side bar Area*/

  .top-side{
    margin: 70px auto;
    display: flex;gap: 50px;
    flex-direction: column;font-size: 16px;
  }
  .bottom-side{
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    gap: 40px;font-size: 20px;
  }
  .bottom-side i{
    margin: 0 auto;
    font-size: 16px;
  }
  .avatar img{
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #2693ff;
    
      transition: .15s ease-out;
  }
  
  
  /*Main Div*/
  .main-div{
    background-color: #f2f5f7;
    width: 700px;
    height: 100%;
    display: flex;position: fixed;
  }
  .left-main-div{
    display: flex; 
    flex-direction: column;
    margin-top: 15px;
  }
  .assign{
    display: flex;height: 40px;
    width: 250px; padding-top:10px ;
    border-radius: 5px; margin-left: 25px;
  }
  .assign:hover{
    background-color: #ffffff;
  }
  .iflex{display: flex;}
  .iflex i{margin:  4px 10px;font-weight: bold;}
  .iflex p{font-family: 'proxima'; font-weight: bold;}
  .tags{display: flex;height: 40px;
    width: 250px; padding-top:10px ;
    border-radius: 5px; margin-left: 25px;
    font-family: "proxima";
    color: #a1abb4;
    font-size: 12px;
    font-weight: 600;
    transition: color .2s ease;
    margin-top: 40px;
  }
  .tags:hover{
    background-color: #ffff;
  }
  .tags p{
    margin-left: 10px;
  }
  .tags i:hover{
    color: #4da6ff;
  }
  .more-circle{
      width: 60px;
      height: 60px;
      background-color: #4da6ff;
      border-radius: 50%;
      box-shadow: 0 2px 30px rgb(32 36 40 / 5%), 0 1px 8px rgb(32 36 40 / 15%);
      transition: all .15s ease-in;padding: 15px;
      margin-left: 25px;margin-top: 200px;
  }
  .more-circle:hover{
    width: 60px;
      height: 60px;
  }
  .more-circle i{
    font-size: 30px;color: white;
  }
  
  .sp{
    font-family: "proxima";
      margin: 0px;
      padding: 0px;
      color: rgb(131, 140, 150);
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      text-align: left;
      text-transform: uppercase;
  }
  .right-div{
    width: 100%;margin-top: 5px;
    height: 90px;background-color: rgb(255, 255, 255);
    border: 1px solid lightblue; border-radius: 10px;
  }
  .right-div:hover{background-color: rgb(249, 250, 250);}
  .right-div:focus{background-color: #000;}
  .right-main-div{margin-left: 15px; overflow-y: scroll;}
  .right-main-div p{
    margin: 15px 0;
  }
  .top-div{
  display: flex;
  padding: 15px;
  }
  .top-div img{
    width: 30px; height: 30px;
    border-radius: 5px;
  }
  .top-div span{
    color: #e1e6ea;
  }
  .top-div p{
    font-size: 12px;
    color: #ffffff;
    margin-left: 130px;margin-top: 5px;
  }
  .top-div p:hover{
    color: #e1e6ea;
  }
  .ii{
    font-size: 50px;color: red;
  }
  .bottom-div{
    display: flex;
    margin-top: -30px;
    
  }
  .cir-div{
    display: flex;
  }
  .cir-div i{
    font-size: 40px; color: #4da6ff;
  }
  .bottom-div p{
    margin-top: 7px;
    font-size: 14px;
  }
  
  
  /*Sub Div*/
  .sub-div{
    width: 600px;
    height: 590px;background-color: #ffffff; 
    margin-top: 0;
  }
  .customer-div{z-index: 3;
    display: flex;margin-top: 25px;height: ;
    max-width: 530px;margin-left: 30px;
    background-color: rgb(255, 255, 255);padding: 10px;
  }
  .iup{
    display: flex;flex-direction: column;
    margin-left: 10px; color: #e1e6ea;
  }
  .customer-div p{
    width: 400px; font-family: "proxima";
    color: #202428;
    font-size: 20px;
    font-weight: 300;
    transition: color .2s ease;
    margin-left:25px;
    
  }
  .scrol-div{
    overflow-y: scroll;
    z-index: 1;height: 500px;
  }
  .customer-div p:hover{
    border: 1px solid rgb(225, 230, 234);
    border-radius: 3px;
  }
  .i2{
    margin-top: 6px;color: #e1e6ea;
  }
  .i3{
    margin-top: 7px;margin-left: 10px;
    color: #e1e6ea;}
    .user-div{
      display: flex;
    max-width: 530px;margin-left: 30px;
    background-color: rgb(255, 255, 255);padding: 10px;
    }
  .user-div img{
    width: 30px;height: 30px;
    border-radius: 3px;margin-left: 20px;
  }
  .bibi{
    font-size: 20px;color: #838c96;
    cursor: pointer;
    transition: color .15s ease-out;;
  }
  .user-div p{
    font-family: 'proxima'; font-weight: bold;
    margin-left: 10px;
  }
  .plus{
    font-size: 15px;
    margin-left: 20px;margin-top: 5px;
    color: #838c96;
      cursor: pointer;
      transition: color .15s ease-out;
  }
  .add{
    font-size: 15px;margin-top: 3px;
    color: #838c96;
      transition: color .15s ease-out;
  }
  .tag-div{
    display: flex;
    max-width: 530px;margin-left: 30px;
    background-color: rgb(255, 255, 255);padding: 10px;
  }
  .tag{
    width: 70px;height: 30px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;margin-left: 23px;
    border: 1px solid #a1abb4;
  }.tag:hover{background-color: #d5dce4;}
  .ta{color: #bcc4cc;width: 16px;
    height: 16px}
  .tag i{
    font-size: 20px;
    margin: 3px 0;
  }
  .tag p{font-size: 14px;font-weight: bold;
    color: #838c96;margin: auto 0;
  }
  .line-div{
    margin: 20px auto;
    width: 520px;height: 1px;
    background-color: green;
  }
  .sub-p p{
    transition: .2s ease;
    color: rgb(32, 36, 40);
        font-size: 14px;
        line-height: 24px;
        max-width: 70em;  
        background-color: #E2effd;
  }
  .sub-p{
    margin-top: 30px;
    margin-left: 60px;
    width: 450px;
  }
  .attach-div{
    display: flex;
    margin-left: 40px;margin-top: 110px;
  }
  
  .attach-div i{
    color: #A1ABB4;font-size: 25px;
  }
  .attach-div i:hover{color: #4da6ff;}
  .attach-div p:hover{color: #4da6ff;}
  .attach-div p{
    margin-left: 20px;
    margin-top: 4px;
    color: #a1abb4;
    font-size:12px;
  }
  .comment-div{display: flex;
    margin: 0 auto;padding: 5px;
    width: 300px;height: 40px;
    background-color: #f2f5f7;
      font-size: 14px;border-radius: 30px;
  }
  .com{display: flex;
    width: 150px;height: 30px;
    background-color: #ffffff;
     border-radius: 30px;padding: 5px;
  }
  .com i{
    font-weight: bold;color: #4da6ff;
    font-size: 20px;margin-left: 10px;
  }
  .com h4{color: #4da6ff;
    margin-left: 10px;
    margin-top: 0px;
  }
  .circ{font-size: 20px;color: #a1abb4;
  margin-top: 5px;margin-left: 25px;}
  .circe{
    margin-top: 5px;margin-left: 10px;font-weight: bold;
    color: #a1abb4;
  }
  footer{position: fixed;
    bottom: 0;z-index: 3;
    display: flex;border: 1px solid rgb(225, 230, 234);
    height: 70px;width: 600px;
    background-color: #f2f5f7;overflow-y: hidden;
  }
  footer img{
    width: 30px;height: 30px;
    border-radius: 50%;
    margin: auto 30px;
  }
  .oj{
    margin: auto 0;
    font-size: 14px;
    font-family: 'proxima';
    font-weight: bold;
  }
  .follow{
    width: 80px;height: 30px;
    margin: auto  10px;
    border-radius: 4px;
      border: 1px solid rgb(225, 230, 234);
      color: rgb(131, 140, 150);margin-left: 10px;
  }
  .follow p{
    font-size: 12px;
    text-align: center;
    margin-top:5px;
    }
    .one{
      display: flex;
      gap: 5px;margin: auto 10px;
    }
    .one i{
      font-size: 20px;
      color: #a1abb4;
    }
    .one p{margin-top: 3px;
      font-size: 14px;
      color: #a1abb4;
    }
    .unp{display: flex;
      width: 150px;height: 30px;
    margin: auto  10px;
    border-radius: 4px;
      border: 1px solid rgb(225, 230, 234);
      color: rgb(131, 140, 150);margin-left: 100px;
    }
    .unp i{
      color: red;
      font-size: 20px;font-weight: bold;
      margin: auto 10px;
    }
    .unp p{margin-top: 5px;
      font-size: 14px;
      color: #a1abb4;
    }
    .write{
      display: flex;margin-top: 50px;
      margin-left: 30px;margin-bottom: 350px;
    }
    .write i{
      font-size: 20px;
      color: #a1abb4;
      margin: auto 10px;
    }
    .write input{
      width: 450px;
      height: 40px;
      border: 1px solid #a1abb4;
    }