using Microsoft.AspNetCore.Mvc;
using Hivebox.Models;

namespace Hivebox.Controllers.Api;

[ApiController]
[Route("api/[controller]")]
public class HivesController : ControllerBase
{
    private static readonly List<Hive> _hives =
    [
        new Hive
        {
            Id = "hive-1",
            Name = "Apiário do Olival",
            Status = "healthy",
            Model = "pro",
            Location = new HiveLocation { Latitude = 39.5742, Longitude = -8.3712, Label = "Olival do Outeiro, Tomar" },
            Sensors = new HiveSensors
            {
                TempInterior = 35.2, TempExterior = 22.1, Humidity = 68,
                Weight = 28.4, Co2 = 1850, Battery = 92, Signal = 87, WaspDetected = false
            },
            LastUpdate = DateTime.UtcNow.AddMinutes(-3)
        },
        new Hive
        {
            Id = "hive-2",
            Name = "Quinta da Serração",
            Status = "healthy",
            Model = "starter",
            Location = new HiveLocation { Latitude = 39.6150, Longitude = -8.4250, Label = "Serra, Tomar" },
            Sensors = new HiveSensors
            {
                TempInterior = 34.8, TempExterior = 21.8, Humidity = 71,
                Weight = 31.1, Co2 = null, Battery = 78, Signal = 92, WaspDetected = false
            },
            LastUpdate = DateTime.UtcNow.AddMinutes(-5)
        },
        new Hive
        {
            Id = "hive-3",
            Name = "Herdade dos Pinheiros",
            Status = "danger",
            Model = "pro",
            Location = new HiveLocation { Latitude = 39.5880, Longitude = -8.4450, Label = "Pinheiros, Tomar" },
            Sensors = new HiveSensors
            {
                TempInterior = 38.1, TempExterior = 24.3, Humidity = 75,
                Weight = 22.0, Co2 = 2850, Battery = 45, Signal = 61, WaspDetected = true
            },
            LastUpdate = DateTime.UtcNow.AddMinutes(-1)
        },
        new Hive
        {
            Id = "hive-4",
            Name = "Vale do Nabão",
            Status = "warning",
            Model = "starter",
            Location = new HiveLocation { Latitude = 39.6200, Longitude = -8.3980, Label = "Vale do Nabão, Tomar" },
            Sensors = new HiveSensors
            {
                TempInterior = 0, TempExterior = 0, Humidity = 0,
                Weight = 26.0, Co2 = null, Battery = 8, Signal = 12, WaspDetected = false
            },
            LastUpdate = DateTime.UtcNow.AddHours(-3)
        }
    ];

    private static readonly Dictionary<string, HiveHistory> _history = new()
    {
        ["hive-1"] = new HiveHistory
        {
            Temperature = [
                new() { Label = "Seg", Value = 34.8 }, new() { Label = "Ter", Value = 35.0 },
                new() { Label = "Qua", Value = 35.1 }, new() { Label = "Qui", Value = 34.9 },
                new() { Label = "Sex", Value = 35.2 }, new() { Label = "Sáb", Value = 35.3 },
                new() { Label = "Dom", Value = 35.2 }
            ],
            Weight = [
                new() { Label = "Seg", Value = 27.8 }, new() { Label = "Ter", Value = 28.0 },
                new() { Label = "Qua", Value = 28.1 }, new() { Label = "Qui", Value = 28.2 },
                new() { Label = "Sex", Value = 28.3 }, new() { Label = "Sáb", Value = 28.4 },
                new() { Label = "Dom", Value = 28.4 }
            ],
            Co2 = [
                new() { Label = "Seg", Value = 1820 }, new() { Label = "Ter", Value = 1840 },
                new() { Label = "Qua", Value = 1860 }, new() { Label = "Qui", Value = 1830 },
                new() { Label = "Sex", Value = 1850 }, new() { Label = "Sáb", Value = 1870 },
                new() { Label = "Dom", Value = 1850 }
            ]
        },
        ["hive-2"] = new HiveHistory
        {
            Temperature = [
                new() { Label = "Seg", Value = 34.5 }, new() { Label = "Ter", Value = 34.7 },
                new() { Label = "Qua", Value = 34.8 }, new() { Label = "Qui", Value = 34.6 },
                new() { Label = "Sex", Value = 34.8 }, new() { Label = "Sáb", Value = 34.9 },
                new() { Label = "Dom", Value = 34.8 }
            ],
            Weight = [
                new() { Label = "Seg", Value = 30.5 }, new() { Label = "Ter", Value = 30.7 },
                new() { Label = "Qua", Value = 30.8 }, new() { Label = "Qui", Value = 30.9 },
                new() { Label = "Sex", Value = 31.0 }, new() { Label = "Sáb", Value = 31.1 },
                new() { Label = "Dom", Value = 31.1 }
            ],
            Co2 = []
        },
        ["hive-3"] = new HiveHistory
        {
            Temperature = [
                new() { Label = "Seg", Value = 35.1 }, new() { Label = "Ter", Value = 35.5 },
                new() { Label = "Qua", Value = 36.2 }, new() { Label = "Qui", Value = 37.0 },
                new() { Label = "Sex", Value = 37.8 }, new() { Label = "Sáb", Value = 38.0 },
                new() { Label = "Dom", Value = 38.1 }
            ],
            Weight = [
                new() { Label = "Seg", Value = 23.8 }, new() { Label = "Ter", Value = 23.5 },
                new() { Label = "Qua", Value = 23.2 }, new() { Label = "Qui", Value = 22.8 },
                new() { Label = "Sex", Value = 22.4 }, new() { Label = "Sáb", Value = 22.1 },
                new() { Label = "Dom", Value = 22.0 }
            ],
            Co2 = [
                new() { Label = "Seg", Value = 2100 }, new() { Label = "Ter", Value = 2300 },
                new() { Label = "Qua", Value = 2500 }, new() { Label = "Qui", Value = 2600 },
                new() { Label = "Sex", Value = 2700 }, new() { Label = "Sáb", Value = 2800 },
                new() { Label = "Dom", Value = 2850 }
            ]
        },
        ["hive-4"] = new HiveHistory
        {
            Temperature = [
                new() { Label = "Seg", Value = 34.0 }, new() { Label = "Ter", Value = 34.1 },
                new() { Label = "Qua", Value = 34.0 }, new() { Label = "Qui", Value = 34.2 },
                new() { Label = "Sex", Value = 33.8 }, new() { Label = "Sáb", Value = 0 },
                new() { Label = "Dom", Value = 0 }
            ],
            Weight = [
                new() { Label = "Seg", Value = 26.0 }, new() { Label = "Ter", Value = 26.0 },
                new() { Label = "Qua", Value = 26.0 }, new() { Label = "Qui", Value = 26.0 },
                new() { Label = "Sex", Value = 26.0 }, new() { Label = "Sáb", Value = 0 },
                new() { Label = "Dom", Value = 0 }
            ],
            Co2 = []
        }
    };

    [HttpGet]
    public IActionResult GetAll() => Ok(_hives);

    [HttpGet("{id}")]
    public IActionResult GetById(string id)
    {
        var hive = _hives.FirstOrDefault(h => h.Id == id);
        return hive is null ? NotFound() : Ok(hive);
    }

    [HttpGet("{id}/history")]
    public IActionResult GetHistory(string id)
    {
        if (!_history.TryGetValue(id, out var history))
            return NotFound();
        return Ok(history);
    }
}