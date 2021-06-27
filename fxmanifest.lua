fx_version 'adamant'

games { 'gta5' }

author 'https://github.com/Delarmuss'

client_scripts {
	'client.lua',
	'config.lua'
}

ui_page('html/index.html')

files({
	"html/*.html",
	"html/css/*.css",
	"html/img/*.svg",
	"html/js/*.js"
})