import Link from 'next/link'
// 카카오 로그인 버튼

// img
import kakao from '../../public/Images/Oauth/kakao.png'


const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=1234&redirect_uri=http://localhost:3000&response_type=code`

function OauthButton({img}) {
  return (
    <div>
      <button className="Login"  onClick={() => {window.location.assign(KAKAO_LOGIN_URL)}}>
        <img src='../../public/Images/Oauth/kakao.png' ></img>
        Kakao
      </button>
      <style jsx>{`
        .Login {
          width: 16em;
          height: 4em;
          margin-bottom: 0.3em;
          border-radius: 0.5em;
          background-size: contain; 
          background-repeat: no-repeat; 
          background-position: center; 
          cursor: pointer;
          margin-top: 2em;
        }
        `}
      </style>
    </div>
  )
}

export default OauthButton