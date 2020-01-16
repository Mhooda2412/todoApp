const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{

	sgMail.send({
		to: email,
		from:'mhooda2412@gmail.com',
		subject:'thanks for joining in',
		text:`Welcome ${name} . thanks for joining`
	})
}

const sendCanclationMail = (email,name)=>{
	sgMail.send({
		to:email,
		from:'mhooda2412@gmail.com',
		subject:'Why you cancal',
		text:`Mr ${name},why you cancaled the app .... plz give your valiable feed back`
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCanclationMail
}



