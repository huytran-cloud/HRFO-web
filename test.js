
const inputValues = {
    name: "HuyTrumIT",
    email: "HuyTrumIT@gmail.com",
    message: "Hello World",
}

sendMail = async (data) => {
    const response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          inputValues
        }),
      })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          console.log("Message Sent");
        } else if (resData.status === "fail") {
          console.log("Message failed to send");
        }
      })
      .then(() => {
        // do sth
      });
}
sendMail()