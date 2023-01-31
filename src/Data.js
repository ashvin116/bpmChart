// export const UserData = [
//     {
//       id: 1,
//       age: "",
//       minBP:80,
//       normalBP:95,
//       maxBP:110
//     },
//     {
//       id: 2,
//       age: "",
//       minBP: 90,
//       normalBP:95,
//       maxBP:115
//     },
//     {
//       id: 3,
//       age: "",
//       minBP: 70,
//       normalBP:95,
//       maxBP:120
//     },
//     {
//       id: 4,
//       age: "",
//       minBP: 85,
//       normalBP:95,
//       maxBP:132
//     },
    
//     // {
//     //   id: 5,
//     //   year: 2020,
//     //   userGain: 4300,
//     //   userLost: 234,
//     // },
//   ];
  

export const UserData = [{
    "user": {
      "provider": "APPLE",
      "last_webhook_update": null,
      "reference_id": null,
      "user_id": "50603876-429c-4a0a-b6c3-37dce2c645fd",
      "scopes": null
    },
    "type": "sleep",
    "data": [
      {
        "sleep_durations_data": {
          "awake": {
            "wake_up_latency_seconds": null,
            "duration_long_interruption_seconds": null,
            "duration_short_interruption_seconds": null,
            "num_wakeup_events": null,
            "sleep_latency_seconds": null,
            "duration_awake_state_seconds": 237.92692043078836,
            "num_out_of_bed_events": null
          },
          "asleep": {
            "duration_deep_sleep_state_seconds": null,
            "duration_REM_sleep_state_seconds": null,
            "duration_asleep_state_seconds": 92.82319756910776,
            "num_REM_events": null,
            "duration_light_sleep_state_seconds": null
          },
          "hypnogram_samples": [
            {
              "level": 4,
              "timestamp": "2023-01-25T22:42:22.662747+00:00"
            },
            {
              "level": 3,
              "timestamp": "2023-01-25T22:56:22.662747+00:00"
            },
            {
              "level": 4,
              "timestamp": "2023-01-25T23:10:22.662747+00:00"
            },
            {
              "level": 6,
              "timestamp": "2023-01-25T23:24:22.662747+00:00"
            },
            {
              "level": 6,
              "timestamp": "2023-01-25T23:38:22.662747+00:00"
            },
            {
              "level": 2,
              "timestamp": "2023-01-25T23:52:22.662747+00:00"
            },
            {
              "level": 3,
              "timestamp": "2023-01-26T00:06:22.662747+00:00"
            },
            {
              "level": 4,
              "timestamp": "2023-01-26T00:20:22.662747+00:00"
            },
            {
              "level": 2,
              "timestamp": "2023-01-26T00:34:22.662747+00:00"
            },
            {
              "level": 2,
              "timestamp": "2023-01-26T00:48:22.662747+00:00"
            },
            {
              "level": 2,
              "timestamp": "2023-01-26T01:02:22.662747+00:00"
            },
            {
              "level": 6,
              "timestamp": "2023-01-26T01:16:22.662747+00:00"
            },
            {
              "level": 5,
              "timestamp": "2023-01-26T01:30:22.662747+00:00"
            }
          ],
          "sleep_efficiency": 93.19249777652794,
          "other": {
            "duration_unmeasurable_sleep_seconds": null,
            "duration_in_bed_seconds": 249.40198772224923
          }
        },
        "temperature_data": {
          "delta": null
        },
        "respiration_data": {
          "breaths_data": {
            "avg_breaths_per_min": null,
            "max_breaths_per_min": null,
            "end_time": null,
            "min_breaths_per_min": null,
            "on_demand_reading": null,
            "samples": [],
            "start_time": null
          },
          "oxygen_saturation_data": {
            "avg_saturation_percentage": null,
            "end_time": null,
            "samples": [],
            "start_time": null
          },
          "snoring_data": {
            "total_snoring_duration_seconds": null,
            "num_snoring_events": null,
            "end_time": null,
            "samples": [],
            "start_time": null
          }
        },
        "metadata": {
          "upload_type": 0,
          "end_time": "2023-01-26T04:00:22.662747+00:00",
          "is_nap": false,
          "start_time": "2023-01-25T22:42:22.662747+00:00"
        },
        "heart_rate_data": {
          "summary": {
            "max_hr_bpm": 65,
            "min_hr_bpm": 43,
            "avg_hr_bpm": 61,
            "user_max_hr_bpm": null,
            "avg_hrv_rmssd": null,
            "resting_hr_bpm": null,
            "avg_hrv_sdnn": 150
          },
          "detailed": {
            "hr_samples": [
              {
                "timestamp": "2023-01-25T22:42:22.662747+00:00",
                "bpm": 69
              },
              {
                "timestamp": "2023-01-25T22:56:22.662747+00:00",
                "bpm": 85
              },
              {
                "timestamp": "2023-01-25T23:10:22.662747+00:00",
                "bpm": 62
              },
              {
                 "timestamp": "2023-01-25T23:24:22.662747+00:00",
                "bpm": 101
              },
              {
                "timestamp": "2023-01-25T23:38:22.662747+00:00",
                "bpm": 156
              },
              {
                "timestamp": "2023-01-25T23:52:22.662747+00:00",
                "bpm": 170
              },
              {
                "timestamp": "2023-01-26T00:06:22.662747+00:00",
                "bpm": 104
              },
              {
                "timestamp": "2023-01-26T00:20:22.662747+00:00",
                "bpm": 146
              },
              {
                "timestamp": "2023-01-26T00:34:22.662747+00:00",
                "bpm": 112
              },
              {
                "timestamp": "2023-01-26T00:48:22.662747+00:00",
                "bpm": 64
              },
              {
                "timestamp": "2023-01-26T01:02:22.662747+00:00",
                "bpm": 87
              },
              {
                "timestamp": "2023-01-26T01:16:22.662747+00:00",
                "bpm": 164
              },
              {
                "timestamp": "2023-01-26T01:30:22.662747+00:00",
                "bpm": 72
              }
              
            ],
            "hrv_samples_rmssd": [],
            "hrv_samples_sdnn": [
              {
                "timestamp": "2023-01-25T22:42:22.662747+00:00",
                "hrv_sdnn": 109
              },
              {
                "timestamp": "2023-01-25T22:56:22.662747+00:00",
                "hrv_sdnn": 104
              },
              {
                "timestamp": "2023-01-25T23:10:22.662747+00:00",
                "hrv_sdnn": 92
              },
              {
                "timestamp": "2023-01-25T23:24:22.662747+00:00",
                "hrv_sdnn": 94
              },
              {
                "timestamp": "2023-01-25T23:38:22.662747+00:00",
                "hrv_sdnn": 39
              },
              {
                "timestamp": "2023-01-25T23:52:22.662747+00:00",
                "hrv_sdnn": 37
              },
              {
                "timestamp": "2023-01-26T00:06:22.662747+00:00",
                "hrv_sdnn": 80
              },
              {
                "timestamp": "2023-01-26T00:20:22.662747+00:00",
                "hrv_sdnn": 74
              },
              {
                "timestamp": "2023-01-26T00:34:22.662747+00:00",
                "hrv_sdnn": 101
              },
              {
                "timestamp": "2023-01-26T00:48:22.662747+00:00",
                "hrv_sdnn": 104
              },
              {
                "timestamp": "2023-01-26T01:02:22.662747+00:00",
                "hrv_sdnn": 99
              },
              {
                "timestamp": "2023-01-26T01:16:22.662747+00:00",
                "hrv_sdnn": 38
              },
              {
                "timestamp": "2023-01-26T01:30:22.662747+00:00",
                "hrv_sdnn": 75
              }
            ]
          }
        },
        "device_data": {
          "manufacturer": null,
          "name": null,
          "activation_timestamp": null,
          "hardware_version": null,
          "other_devices": [],
          "serial_number": null,
          "software_version": null
        },
        "readiness_data": {
          "readiness": null,
          "recovery_level": 0
        }
      }
    ]
  }]