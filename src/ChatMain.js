import {Fragment,useState,useEffect,useRef} from "react";
import io from 'socket.io-client';
// 연결되는 프로그램
const socket=io.connect('http://localhost:5555')
function ChatMain(){
    const messageRef = useRef()
    const [recvMsg,setRecvMsg] = useState('')
    // 서버에서 전송된 값을 받는다.
    const [logs,setLogs] = useState([])
    // 채팅 메시지 누적
    useEffect(() => {
        recvMsg && setLogs((prev)=>[...prev,recvMsg])
        messageRef.current.scrollTop=messageRef.current.scrollHeight
    }, [recvMsg]);
    useEffect(() => {
        socket.on('chat-msg',(obj)=>{
            const {message,errmsg} = obj
            console.log(message)
            setRecvMsg(message)//갱신 명령
        })
    }, [socket]);
    return(
        <div id={"chat_container"}>
            <div id={"chat"} className={"active"}>
                <header><h1>실시간 채팅</h1></header>
                <section className={"content"} ref={messageRef}>
                    <div className={"message_content"}>
                        {
                            logs&&
                            logs.map((m)=>
                                <div className={"message_right"}>
                                    <div className={"message-text"}>{m}</div>
                                </div>
                            )
                        }
                    </div>
                </section>
                <ChatForm/>
            </div>
        </div>
    )
}

function ChatForm(){
    const [message,setMessage] = useState('')
    const messageChange=(e)=>{
        setMessage(e.target.value)
    }
    const send=(e)=>{
        if(e.key==='Enter'){
            e.preventDefault()
            socket.emit('chat-msg',{
                message:message
            })
            setMessage('')
        }
    }
    return(
        <form>
            <input type={"text"} id={"input_chat"} value={message}
                onChange={messageChange} onKeyDown={send}
            />
        </form>
    )

}

export default ChatMain