ESX = nil
local ui = false
local hud = false
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
    end
end)
RegisterNetEvent("esx_status:onTick") 
AddEventHandler("esx_status:onTick", function(Status)
    hunger, thirst = Status[1].percent, Status[2].percent
end)

RegisterCommand('hud', function()
    ui = not ui
    if ui then 
        displayUI(true)
    else
        displayUI(false)
    end
end)

function displayUI(bool)
    ui = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        action = 'ui',
        ui = bool
    })
end

RegisterNUICallback('dlrms_hud:close', function()
    displayUI(false)
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)
        pauseMenuOn = IsPauseMenuActive()
        if not pauseMenuOn then 
            local ped = PlayerPedId()
            local health = GetEntityHealth(ped) - 100
            local armor = GetPedArmour(ped)
            local swim = IsPedSwimming(ped)
            local breath = IsPedSwimmingUnderWater(ped)
            local vehicle = GetVehiclePedIsIn(ped, false)
            local hungerAlert = Config.HungerAlert
            local thirstAlert = Config.ThirstAlert
            local healthAlert = Config.HealthAlert
            local armorAlert = Config.ArmorAlert
            
            if IsPedInVehicle(ped, vehicle, false) then
                DisplayRadar(true)
            else
                DisplayRadar(false)
                if breath then
                    stamina = GetPlayerUnderwaterTimeRemaining(PlayerId()) * 10
                else
                    stamina = GetPlayerSprintTimeRemaining(PlayerId()) * 10
                end
            end
                
            SendNUIMessage({
                action = 'hud',
                pauseMenuOn = false,
                health = health,
                healthAlert = healthAlert,
                armor = armor,
                armorAlert = armorAlert,

                hunger = hunger,
                hungerAlert = hungerAlert,
                thirst = thirst,
                thirstAlert = thirstAlert,

                stamina = stamina,
                swim = swim,
                breath = breath,

                vehicle = vehicle
            })
        else
            SendNUIMessage({
                pauseMenuOn = true,
            })
        end
        

    end
end)
