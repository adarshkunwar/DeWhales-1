import React,{useState,useRef} from 'react'
import './Confirmation.css'
import { identity } from "bitclout-sdk";


const host = "https://deso-backend.herokuapp.com";
const recieverAddress = 'BC1YLh89nsbp6TYyoPUu4UXUSdaCSP7eN5rkMGgZuQSRQgpp3ibf9P6'
const Confirmation = ({setOpenModal,ukey}) => {

  const [Hex, setHex] = useState("");
  const [counter, setCounter] = useState(1)
  const closeRef = useRef(null);
  const getTransactionHex = async()=>
  {
    try {
      const response = await fetch(`${host}/api/v0/send-deso`, {
        method: "POST",
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify({
          SenderPublicKeyBase58Check: ukey,
          RecipientPublicKeyOrUsername: recieverAddress,
          // AmountNanos: 3000000000,
          AmountNanos: 300000,
          MinFeeRateNanosPerKb : 1000
      }),
      });
      const json = await response.json();
      console.log(json);
      if(json.error)
      {
        console.log('Unable to mint from your DeSo account! Please check your wallet  ! ');
      }
      else{
              const transHex = await json.TransactionHex;
              console.log(transHex);
              const approve =await identity.launch(`/approve?tx=${transHex}`);
              // console.log(approve);
              const signedTransHex = await approve.signedTransactionHex;
              // console.log(signedTransHex);
              if(signedTransHex)
              {
                setCounter(counter+1);
              }
              setHex(signedTransHex);
              const resp = await fetch(`${host}/api/v0/submit-transaction`, {
                method: "POST",
                headers: {
                  'Content-type':'application/json',
                },
                body: JSON.stringify({
                  TransactionHex: signedTransHex,
              }),
              });
              console.log(Hex);
              console.log(resp);
      }
    } catch (error) {
      console.log('Unable to mint from your DESO account ! Please check your wallet !');
    }
  }


  const handleAllowBtn = async ()=>
  {
    console.log('allowbutton clicked');
    getTransactionHex();
    closeRef.current.click();
  }
  return (
    <>
       <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>Please allow access to your account to mint NFT. We are requesting you to grant<b> 3.0 $DESO</b> for NFT to mint.</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn" ref={closeRef}
          >
            Cancel
          </button>
          <button onClick={handleAllowBtn}>Continue</button>
        </div>
      </div>
    </div>
</>
)
  }
export default Confirmation;