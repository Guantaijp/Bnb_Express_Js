const {Router} = require('express');
const router = Router();


const {registerUser, loginUser} = require('../controllers/authUser');

// register user
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

// logout user
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({
        message: "Logged out successfully"
    });
});

// Google OAuth
// router.get('/google' , passport.authenticate('google'), (req, res) => {
//     console.log(req.user);
//     res.send('Logged in');
// });

// router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
//     console.log(req.user);
//     res.send('Logged in');
//     });
    


module.exports = router;