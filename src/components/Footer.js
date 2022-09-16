import React from 'react'
import { List } from 'semantic-ui-react'

export default function Footer() {
  return (
    <div className="bottom">
    <List>
      <List.Item>
        <List.Icon name='users' />
        <List.Content>하와이문화교류협회  |  고유번호 : 258-80-00237  |  대표자 : 김보희</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>(06683) 서울시 서초구 방배로15길 13 지층 (동광빌딩)</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='phone' />
        <List.Content>
          <a href='mailto:jack@semantic-ui.com'>010-7304-2013</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.semantic-ui.com'> Copyright © 하와이문화교류협회. All rights reserved.</a>
        </List.Content>
      </List.Item>
    </List>
      <div className="logo">
        <img className="sns" src='/youtube.png' width='2%' onClick={()=>window.location.assign('https://www.youtube.com/channel/UCPT-3XyzGJGFJDCygY39DmQ')}>
        </img>
        <img className="sns" src='/instar.png' width='2%' onClick={()=>window.location.assign('https://www.instagram.com/hacea_official/')}>
        </img>
      </div>
      <style jsx>{`
        .bottom{
          width: 100vw;
          height: 8em;
          border-top: 0.001em solid #000;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-weight: 600;
          font-size: 1.1em;
          letter-spacing: 2px;
          background-color: rgb(240, 240, 240);
        }
        .sns{
          width:  2em;
          height: 2em;
          cursor: pointer;
        }
        .logo {
            display: flex;
            flex-direction:row;
            width: 10%;
            font-size: 150%;
            justify-content: space-evenly;
        }
      `}
      </style>
    </div>
  )
}
