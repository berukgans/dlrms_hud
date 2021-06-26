
ESX = nil
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

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)
        local pauseMenuOn = IsPauseMenuActive()
        if not pauseMenuOn then 
            local ped = PlayerPedId()
            local health = GetEntityHealth(ped) - 100
            local armor = GetPedArmour(ped)
            local swim = IsPedSwimming(ped)
            local breath = IsPedSwimmingUnderWater(ped)
            local vehicle = GetVehiclePedIsIn(ped, false)

            if IsPedInVehicle(ped, vehicle, false) then
                fuel = GetVehicleFuelLevel(vehicle)
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
                pauseMenuOn = false,
                health = health,
                armor = armor,
                hunger = hunger,
                thirst = thirst,

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
