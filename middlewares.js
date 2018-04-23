export const simulateServerError = (req, res, next) => {
    const chance = 0.2;
    if(Math.random() < chance) (
        res.status(500).send("Server error")
    )
     next()
   }

export const modifiedRes = (req, res, next) => {
    const oldSend = res.send;

    res.send = function(data) {
        const dataArray = JSON.parse(data)
        const newData = {
            results: {
                count: dataArray.length,
                user_list: dataArray
            },
        }
        data = JSON.stringify(newData)
        oldSend.call(res, data)
    }
    next()
  }

export const requireLogin = (req,res,next) => {
    const token = req.header('x-auth');
    if(!token) res.json('You need to log in!')
    next();
}