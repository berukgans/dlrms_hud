Citizen.CreateThread( function()
updatePath = "/delarmuss/dlrms_hud" -- your git user/repo path
resourceName = "("..GetCurrentResourceName()..")" -- the resource name

function checkVersion(err,responseText, headers)
	curVersion = LoadResourceFile(GetCurrentResourceName(), "version") -- make sure the "version" file actually exists in your resource root!

	if curVersion == responseText then 
		print("\n"..resourceName.." is up to date, have fun!")
	elseif curVersion < responseText then
		print("\n###############################")
		print("\n"..resourceName.." is outdated, should be:\n"..responseText.."\nis:\n"..curVersion.."\nplease update it from https://github.com"..updatePath.."")
		print("\n###############################")
	else
		print("You somehow skipped a few versions of "..resourceName.." or the git went offline, if it's still online i advise you to update ( or downgrade? )")
	end
end

PerformHttpRequest("https://raw.githubusercontent.com"..updatePath.."/master/version", checkVersion, "GET")
end)
