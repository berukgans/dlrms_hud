fx_version 'adamant'

games { 'gta5' }

author 'https://github.com/Delarmuss'

client_scripts {
	'client.lua',
	'config.lua'
}

ui_page('ui/index.html')

files({
	"ui/*.html",
	"ui/css/*.css",
	"ui/img/*.svg",
	"ui/js/*.js"
})