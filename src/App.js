import style from './style.module.css'
import Form from './components/Form'
import { MessagesList } from './components/MessageList';
import Menu from './components/Menu';
import { useEffect, useState } from "react";

function App(props) {
  const [messageList, setMessages] = useState([])

  function addItem(value1, value2) {
    let obj = {
      author: value1,
      text: value2
    }
    setMessages([...messageList, obj])
  }

  useEffect(() => {
    console.log('Refresh state')

  }, [messageList])

  return (
    <>
      <h1 className={style.vk}>VK</h1>
      <MessagesList items={messageList} />
      <Form add={addItem}></Form>
      <Menu></Menu>
    </>
  );
}

export default App;
