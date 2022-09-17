import { Input, Icon , Button} from 'semantic-ui-react'


export default function Signup() {
  return (
    <div className="main">
      <div className="inputBox">
        <h2 className="title">Sign Up</h2>
        <div className="box">
          <Input placeholder='ID' icon='user'></Input>
        </div>
        <div className="box">
          <Input placeholder='Password' icon='lock'></Input>
        </div>
        <div className="box">
          <Input placeholder='Address' icon='check'></Input> 
        </div>
        <div className="lastBox">
          <Input placeholder='Age' icon='check'></Input>
        </div>
        <div className="button">
        <Button >Submit</Button>
        </div>

      </div>
      <style jsx>{`
        .main {
          display:flex;
          justify-content: center;
        }
        .title {
          display:flex;
          justify-content: center;
          padding-top: 3em;
          padding-bottom: 1em;
          align-items: center;
          color: rgb(1, 181, 173);
        }
        .inputBox {
          display:flex;
          flex-direction: column;
          justify-content: center;
          width:30em;
        }
        .box {
          display:flex;
          justify-content: center;
          padding-top: 1em;
          align-items: center;
        }
        .lastBox {
          display:flex;
          justify-content: center;
          padding-top: 1em;
          padding-bottom: 3em;
          align-items: center;
        }
        .button {
          display: flex;
          justify-content: center;
          padding-bottom: 1em;

        }
        `}
      </style>
    </div>
  );
}