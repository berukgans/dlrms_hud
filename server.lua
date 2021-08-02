ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('dlrms_hud:getAccounts', function(source, cb)
  local xPlayer = ESX.GetPlayerFromId(source)
  local job = xPlayer.getJob()
  local mySociety = nil
  local society = nil
    
  TriggerEvent('esx_society:getSociety', xPlayer.job.name, function(_society)
      mySociety = _society
  end)

  if mySociety ~= nil then
      TriggerEvent('esx_addonaccount:getSharedAccount', mySociety.account, function(account)
            society = account.money
      end)
  end

  cb(job.label, job.grade_label, format_int(xPlayer.getMoney()), format_int(xPlayer.getAccount("bank").money), format_int(xPlayer.getAccount("black_money").money), format_int(society))
end)

function format_int(number)
  local i, j, minus, int, fraction = tostring(number):find('([-]?)(%d+)([.]?%d*)')
  int = int:reverse():gsub("(%d%d%d)", "%1,")
  return minus .. int:reverse():gsub("^,", "") .. fraction
end