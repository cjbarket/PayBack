function getCost(longitude, latitude, daysToShip, packWeight, type) {
    //varables
    let shipCost = 0; //kilograms of CO2
    let prodCost = 0; //kilograms of CO2
    let totalCost = 0;
  
    //gets ship cost
    let distances = [];
    let longs = [
      33.58, 32.67, 33.57, 32.9, 31.32, 31.28, 33.97, 34.65, 32.38, 30.68, 30.63,
      32.3, 34.75, 32.34, 31.87, 33.23, 51.88, 67.1, 61.17, 61.22, 57.83, 61.58,
      55.03, 53.5, 71.3, 70.13, 60.78, 66.92, 64.0, 60.82, 63.38, 56.0, 60.38,
      58.33, 60.33, 67.5, 62.88, 65.83, 55.2, 60.5, 55.8, 70.2, 59.05, 62.73,
      53.88, 64.77, 59.62, 58.2, 64.82, 62.85, 57.45, 65.93, 66.57, 58.25, 68.48,
      63.77, 62.15, 58.42, 59.23, 61.98, 63.83, 59.63, 58.1, 59.75, 58.37, 56.97,
      60.57, 55.35, 58.68, 57.75, 66.87, 61.63, 70.92, 65.0, 61.43, 62.97, 60.37,
      59.43, 63.9, 64.55, 62.07, 53.58, 64.5, 62.97, 70.5, 61.6, 63.03, 56.82,
      69.82, 56.25, 65.25, 56.95, 66.82, 70.25, 60.2, 62.17, 55.33, 60.18, 53.2,
      66.27, 57.07, 56.88, 59.75, 61.97, 62.03, 57.15, 61.9, 62.3, 65.17, 69.37,
      63.88, 61.13, 61.13, 70.62, 66.03, 60.78, 61.75, 56.48, 59.52, 32.17, 33.68,
      31.45, 33.47, 35.13, 31.6, 33.55, 33.42, 35.95, 35.27, 33.53, 36.93, 34.23,
      33.43, 34.65, 32.82, 33.62, 34.27, 34.27, 32.12, 33.3, 35.02, 33.1, 32.65,
      32.85, 35.97, 33.52, 33.22, 36.0, 35.33, 36.27, 34.48, 35.83, 35.22, 34.92,
      34.83, 34.17, 36.18, 33.45, 36.13, 37.78, 41.48, 40.98, 35.43, 39.13, 33.93,
      35.28, 34.27, 37.6, 39.28, 33.62, 34.2, 33.3, 32.62, 33.13, 37.38, 39.78,
      35.68, 33.97, 37.98, 41.78, 34.87, 34.9, 32.82, 34.08, 33.67, 41.33, 36.0,
      36.68, 36.77, 33.87, 34.58, 33.92, 37.65, 32.83, 32.57, 34.1, 38.9, 34.73,
      36.33, 37.7, 33.82, 33.78, 33.93, 37.63, 33.88, 39.1, 38.57, 38.67, 37.28,
      32.87, 37.63, 37.42, 35.05, 41.73, 36.58, 41.32, 34.23, 38.22, 34.77, 32.7,
      34.1, 37.73, 34.05, 34.2, 33.83, 35.05, 37.47, 35.67, 37.83, 34.12, 39.58,
      34.95, 35.67, 36.12, 40.15, 40.5, 33.95, 38.52, 38.7, 36.67, 37.52, 33.42,
      33.02, 32.82, 32.73, 32.57, 32.57, 32.82, 37.75, 37.62, 37.37, 37.33, 35.23,
      33.38, 34.03, 33.25, 34.75, 33.67, 34.43, 34.9, 34.02, 38.52, 40.03, 41.78,
      37.9, 35.33, 40.63, 33.63, 33.8, 38.27, 39.32, 33.7, 34.28, 39.13, 34.22,
      35.2, 35.2, 36.32, 39.52, 40.17, 37.45, 39.22, 39.9, 39.72, 38.82, 37.3,
      40.5, 39.75, 37.15, 39.65, 39.57, 38.68, 39.57, 40.45, 40.58, 39.12, 40.43,
      38.55, 38.55, 38.05, 38.12, 39.25, 39.18, 38.5, 38.5, 38.28, 39.53, 38.53,
      40.48, 37.25, 40.0, 41.17, 41.37, 41.33, 41.73, 41.22, 41.27, 41.27, 41.3,
      41.93, 39.13, 39.67, 38.95, 38.85, 29.73, 29.12, 28.08, 28.47, 30.22, 30.78,
      29.62, 29.18, 30.65, 30.48, 27.6, 26.13, 26.58, 26.07, 26.65, 29.68, 25.48,
      30.43, 30.33, 30.5, 30.23, 24.55, 24.57, 28.03, 27.85, 30.84, 30.4, 28.1,
      25.82, 25.92, 25.65, 26.13, 28.62, 28.43, 28.55, 30.2, 28.23, 30.35, 30.47,
      27.97, 27.92, 28.78, 27.4, 30.38, 27.97, 28.52, 30.07, 27.65, 26.68, 30.72,
      31.53, 31.53, 33.95, 33.65, 33.65, 33.88, 33.78, 33.37, 31.15, 32.52, 33.92,
      34.53, 32.33, 31.88, 32.02, 33.01, 32.7, 30.97, 32.63, 34.35, 32.13, 30.78,
      31.25, 21.53, 21.53, 22.05, 24.45, 19.72, 21.35, 20.9, 21.75, 21.75, 19.75,
      22.38, 20.8, 21.98, 20.97, 21.15, 20.42, 20.0, 43.57, 42.53, 44.52, 47.77,
      45.82, 43.0, 45.92, 43.52, 46.38, 42.17, 42.3, 44.88, 43.05, 47.47, 42.92,
      45.18, 45.17, 42.65, 43.5, 42.48, 38.88, 41.77, 38.57, 40.48, 41.16, 37.07,
      37.78, 38.51, 40.03, 41.9, 41.87, 41.78, 41.98, 40.2, 41.93, 39.83, 41.92,
      40.93, 42.08, 41.07, 40.52, 37.75, 41.37, 39.48, 41.45, 38.32, 40.67, 39.93,
      42.2, 38.63, 38.55, 39.85, 41.74, 39.53, 38.99, 39.38, 39.13, 41.72, 38.05,
      41.0, 41.62, 40.65, 39.73, 40.23, 41.7, 39.45, 40.42, 40.78, 41.88, 41.53,
      42.4, 43.4, 42.55, 40.62, 43.15, 41.1, 42.4, 43.17, 42.55, 37.67, 37.75,
      39.55, 37.77, 37.0, 38.33, 39.37, 39.05, 37.93, 39.37, 38.85, 39.38, 38.07,
      38.82, 37.05, 39.15, 37.62, 37.3, 38.85, 38.87, 38.8, 39.07, 38.95, 37.65,
      36.97, 36.67, 37.9, 37.6, 38.05, 37.08, 38.23, 38.18, 37.75, 37.07, 37.48,
      31.38, 32.5, 30.53, 29.55, 29.78, 31.22, 31.33, 28.47, 31.05, 29.18, 28.22,
      28.13, 29.57, 29.73, 30.2, 30.12, 29.7, 28.78, 32.52, 29.7, 30.03, 29.98,
      29.83, 30.03, 28.3, 32.52, 32.47, 30.35, 44.32, 44.8, 44.45, 43.88, 46.87,
      45.45, 45.78, 46.13, 46.95, 43.65, 46.68, 44.07, 44.88, 38.82, 39.18, 39.18,
      39.33, 39.08, 39.7, 38.55, 38.28, 39.47, 38.33, 42.47, 42.58, 42.37, 41.78,
      41.67, 42.57, 41.67, 42.72, 41.4, 41.25, 41.68, 42.18, 41.65, 42.26, 42.15,
      42.17, 42.2, 42.27, 45.07, 42.22, 42.3, 42.13, 46.25, 43.07, 47.47, 42.42,
      42.23, 45.73, 42.97, 42.88, 47.17, 43.83, 44.37, 45.82, 46.53, 42.27, 42.23,
      42.77, 44.27, 46.88, 45.12, 43.17, 45.57, 42.67, 43.53, 46.47, 46.35, 42.62,
      45.92, 44.73, 44.45, 42.23, 43.68, 45.87, 47.5, 46.4, 46.82, 46.83, 47.9,
      43.65, 46.3, 47.22, 47.38, 48.57, 45.13, 44.22, 44.45, 44.83, 45.07, 44.88,
      46.9, 46.6, 44.55, 43.92, 44.93, 45.55, 48.07, 47.58, 48.93, 43.65, 33.65,
      33.45, 33.48, 33.5, 30.4, 31.47, 32.32, 30.42, 31.67, 31.18, 32.55, 32.33,
      31.62, 34.39, 34.27, 38.82, 37.23, 37.75, 38.6, 37.17, 39.32, 39.12, 40.1,
      37.33, 35.66, 36.77, 38.85, 40.25, 37.23, 40.28, 38.75, 38.65, 38.13, 37.22,
      36.88, 38.73, 45.8, 45.78, 45.67, 45.95, 48.6, 45.25, 46.67, 48.22, 47.13,
      47.48, 46.43, 48.55, 46.6, 47.33, 48.3, 47.05, 45.7, 47.5, 46.43, 46.92,
      44.57, 47.72, 47.6, 44.65, 44.68, 48.1, 42.58, 42.05, 40.32, 41.43, 41.78,
      42.83, 41.45, 40.87, 40.07, 40.97, 40.6, 40.33, 40.53, 40.73, 40.85, 40.22,
      42.05, 41.98, 41.37, 41.13, 42.47, 41.12, 41.3, 41.62, 41.87, 41.1, 42.87,
      39.83, 39.5, 40.62, 37.62, 40.83, 39.28, 39.5, 39.42, 38.55, 36.53, 36.57,
      36.08, 40.1, 36.62, 36.23, 42.58, 39.5, 38.07, 41.33, 40.9, 37.58, 44.58,
      43.2, 42.8, 42.9, 43.57, 43.63, 42.93, 44.27, 42.78, 43.08, 44.0, 39.45,
      40.28, 40.87, 40.03, 40.02, 39.37, 40.8, 40.7, 40.85, 40.28, 35.05, 34.38,
      32.33, 36.45, 34.1, 36.02, 32.25, 36.75, 35.52, 35.17, 32.68, 32.85, 32.3,
      35.65, 35.88, 34.98, 32.9, 36.74, 33.3, 35.62, 32.63, 34.07, 36.42, 33.23,
      35.18, 32.63, 42.75, 40.75, 42.22, 42.93, 42.97, 42.17, 40.73, 44.05, 43.35,
      43.23, 40.78, 42.48, 42.15, 44.93, 41.7, 40.77, 40.65, 40.77, 41.5, 43.1,
      44.68, 42.87, 44.65, 41.63, 43.12, 43.12, 44.38, 42.85, 43.12, 43.15, 44.0,
      40.85, 41.07, 35.43, 35.27, 35.22, 34.9, 36.13, 35.25, 36.27, 35.0, 35.13,
      36.08, 35.75, 35.9, 34.82, 35.32, 35.03, 35.92, 35.08, 34.7, 35.17, 35.87,
      35.85, 35.33, 35.24, 34.27, 36.13, 46.77, 48.12, 48.1, 46.78, 46.9, 47.95,
      47.97, 46.92, 46.1, 48.42, 48.27, 47.75, 48.18, 39.21, 40.92, 39.05, 39.1,
      41.52, 41.57, 41.42, 40.0, 40.08, 39.9, 41.02, 40.82, 39.82, 41.6, 41.63,
      39.83, 41.27, 39.95, 34.67, 34.3, 36.75, 35.35, 36.38, 34.65, 36.3, 35.0,
      34.57, 34.88, 35.23, 35.4, 35.53, 34.68, 36.73, 36.16, 35.42, 36.2, 36.33,
      46.15, 45.25, 44.83, 42.08, 43.6, 43.38, 45.68, 44.5, 44.12, 45.53, 42.15,
      45.28, 42.18, 45.5, 42.37, 44.63, 43.42, 44.02, 45.68, 45.6, 44.27, 43.23,
      44.92, 42.62, 45.62, 45.55, 40.65, 40.3, 40.75, 40.27, 41.8, 41.18, 42.08,
      41.38, 40.22, 40.37, 40.32, 40.13, 40.28, 40.2, 40.43, 40.08, 39.88, 41.47,
      40.35, 40.5, 40.38, 39.73, 40.85, 41.33, 41.25, 40.2, 41.17, 41.6, 41.73,
      41.36, 34.5, 32.48, 32.9, 33.95, 34.18, 34.85, 34.9, 33.92, 33.68, 33.82,
      33.97, 34.92, 45.45, 44.3, 43.8, 43.75, 43.77, 44.15, 44.38, 45.93, 43.77,
      45.53, 44.05, 44.05, 44.38, 44.05, 45.16, 43.58, 44.92, 42.92, 36.48, 35.03,
      36.62, 35.95, 36.02, 35.6, 35.82, 35.05, 35.35, 35.15, 36.12, 36.0, 32.42,
      27.73, 35.23, 30.3, 30.2, 32.39, 32.3, 25.9, 31.79, 32.78, 28.37, 34.43,
      30.58, 27.77, 27.7, 28.45, 30.07, 36.02, 32.73, 32.97, 32.9, 32.85, 32.68,
      29.37, 32.43, 31.8, 29.62, 32.82, 31.15, 29.27, 31.07, 33.07, 31.83, 26.23,
      29.35, 29.97, 29.65, 30.5, 29.38, 29.98, 31.08, 27.5, 27.53, 29.37, 32.38,
      33.65, 31.23, 30.37, 26.18, 31.95, 32.78, 28.72, 33.63, 34.17, 30.58, 29.53,
      33.6, 28.08, 31.37, 29.53, 29.33, 30.17, 33.72, 28.03, 32.22, 31.15, 32.37,
      28.85, 31.62, 33.98, 31.78, 38.03, 37.5, 37.7, 39.33, 40.2, 41.05, 39.0,
      38.37, 41.12, 41.78, 38.72, 38.77, 41.18, 39.62, 40.22, 40.5, 37.08, 40.78,
      40.17, 40.45, 41.22, 44.47, 44.2, 45.55, 43.53, 44.42, 42.88, 38.13, 37.5,
      36.57, 38.72, 37.13, 37.95, 37.08, 37.33, 37.13, 36.93, 36.9, 36.82, 38.5,
      37.5, 37.32, 38.27, 36.95, 37.85, 48.8, 47.48, 48.5, 48.88, 47.32, 47.92,
      47.62, 47.08, 46.57, 46.97, 47.15, 47.2, 48.25, 46.97, 48.42, 46.27, 48.12,
      48.22, 46.75, 47.95, 47.5, 47.45, 47.53, 47.25, 47.63, 47.67, 47.28, 47.27,
      46.48, 46.1, 47.4, 48.35, 46.57, 37.78, 37.3, 38.37, 39.28, 38.88, 38.37,
      37.87, 39.4, 39.65, 39.35, 40.18, 37.46, 44.25, 44.87, 44.48, 42.62, 43.87,
      43.2, 43.13, 44.13, 42.95, 43.12, 44.78, 44.22, 44.0, 45.63, 45.48, 43.93,
      44.92, 42.57, 42.92, 41.15, 44.52, 42.75, 41.33, 44.35, 43.6, 42.82, 41.32,
      44.35, 41.8, 43.05, 41.6, 44.77, 43.97, 44.55,
    ];
    let lats = [
      85.85, 85.44, 86.75, 87.25, 85.45, 85.72, 86.09, 86.77, 86.37, 88.25, 88.07,
      86.4, 87.62, 86.99, 86.02, 87.62, 176.65, 157.85, 150.02, 149.85, 134.97,
      159.53, 131.57, 173.3, 156.78, 143.63, 161.8, 151.52, 145.73, 152.3, 148.95,
      134.22, 147.08, 137.05, 145.0, 148.48, 149.83, 144.07, 162.72, 145.5,
      133.25, 148.47, 158.52, 143.92, 166.53, 141.15, 135.37, 136.35, 147.87,
      154.47, 134.03, 149.83, 145.27, 134.9, 149.48, 171.73, 145.45, 135.73,
      135.43, 152.08, 149.0, 151.5, 135.45, 154.92, 134.58, 133.95, 151.25, 131.7,
      156.65, 152.5, 162.63, 149.03, 153.23, 150.65, 142.92, 155.62, 166.27,
      146.33, 152.27, 149.08, 163.3, 169.42, 165.43, 141.93, 149.88, 149.08,
      145.5, 132.97, 162.92, 134.65, 166.87, 158.62, 150.65, 148.33, 154.3,
      153.25, 160.5, 149.75, 174.13, 166.03, 135.35, 154.2, 135.53, 151.2, 146.67,
      170.22, 147.3, 150.1, 152.1, 152.13, 160.8, 146.35, 146.25, 159.85, 168.08,
      148.72, 150.05, 132.37, 139.67, 110.88, 112.08, 109.6, 111.73, 111.67,
      110.35, 113.17, 112.38, 112.15, 113.95, 112.38, 111.45, 111.33, 112.02,
      112.43, 109.68, 111.92, 110.0, 110.0, 110.93, 111.67, 110.73, 115.0, 114.62,
      114.4, 89.95, 92.4, 92.8, 94.17, 94.37, 93.15, 93.1, 90.65, 92.38, 92.15,
      92.25, 91.93, 94.13, 94.0, 90.93, 122.32, 120.53, 124.1, 119.05, 121.45,
      116.95, 116.62, 116.68, 118.6, 120.7, 114.72, 118.37, 117.35, 116.47,
      117.28, 120.57, 121.85, 117.68, 117.63, 122.05, 124.23, 116.78, 117.88,
      115.68, 118.03, 117.73, 124.28, 121.32, 121.77, 119.72, 117.97, 117.38,
      118.33, 122.12, 115.57, 117.12, 117.78, 120.0, 118.22, 119.95, 121.82,
      118.15, 118.05, 118.4, 118.92, 117.27, 121.57, 121.3, 121.4, 120.52, 117.15,
      120.95, 122.05, 118.15, 122.53, 121.85, 122.32, 118.07, 122.28, 114.62,
      117.2, 117.23, 122.22, 117.62, 119.2, 116.5, 118.13, 122.12, 120.63, 122.83,
      119.12, 124.22, 121.12, 121.28, 121.47, 122.25, 122.3, 117.45, 121.5, 121.6,
      121.6, 122.25, 117.62, 118.58, 117.13, 117.17, 116.98, 116.98, 116.97,
      122.68, 122.38, 121.92, 121.82, 120.65, 117.58, 120.4, 119.45, 118.73,
      117.88, 119.83, 120.45, 118.45, 122.82, 124.07, 122.47, 121.25, 117.1,
      120.95, 116.17, 118.33, 121.93, 120.13, 117.83, 116.15, 123.2, 118.48,
      120.95, 120.95, 119.4, 105.35, 103.22, 105.87, 106.87, 105.12, 104.75,
      104.72, 108.63, 107.53, 104.87, 107.75, 106.92, 104.83, 104.77, 105.5,
      105.02, 105.08, 108.53, 104.63, 106.93, 106.92, 103.52, 102.6, 106.3, 103.7,
      107.88, 107.88, 104.52, 107.8, 106.05, 106.82, 104.33, 105.87, 73.13, 73.48,
      72.05, 72.65, 72.67, 72.88, 72.9, 72.08, 72.68, 75.47, 75.6, 77.46, 77.04,
      85.03, 81.57, 81.55, 80.55, 81.88, 86.52, 83.1, 81.05, 86.52, 86.53, 82.77,
      80.13, 81.87, 80.15, 81.87, 82.27, 80.38, 86.68, 81.52, 81.7, 81.68, 81.75,
      81.68, 81.95, 82.52, 85.18, 81.42, 80.63, 80.28, 80.28, 80.43, 81.8, 80.68,
      81.32, 81.33, 85.68, 80.6, 87.32, 87.2, 82.6, 82.68, 81.25, 82.55, 84.37,
      82.53, 80.8, 85.58, 80.42, 80.12, 87.02, 84.18, 82.52, 83.32, 84.42, 84.42,
      84.3, 84.52, 81.97, 81.38, 84.93, 84.52, 84.87, 85.0, 81.57, 81.15, 85.07,
      83.65, 83.2, 83.6, 85.17, 81.2, 83.28, 82.4, 158.12, 158.12, 160.3, 166.47,
      155.07, 157.93, 156.43, 158.28, 158.28, 156.05, 159.67, 156.95, 159.35,
      156.83, 157.1, 156.47, 156.12, 116.22, 113.77, 114.22, 116.82, 115.43,
      115.17, 116.13, 112.07, 117.02, 112.32, 113.37, 116.1, 115.87, 115.8, 112.6,
      113.9, 114.47, 111.58, 114.3, 114.48, 90.05, 88.32, 90.15, 88.93, 89.6,
      89.22, 89.25, 89.09, 88.28, 87.65, 87.62, 87.75, 87.9, 87.6, 88.72, 88.87,
      88.25, 90.43, 87.82, 87.85, 90.66, 89.0, 88.68, 88.28, 90.52, 88.86, 89.68,
      91.2, 89.1, 88.96, 89.85, 89.67, 89.67, 89.33, 89.17, 86.5, 86.62, 86.0,
      87.53, 85.2, 87.42, 86.15, 86.27, 85.38, 86.32, 87.3, 86.93, 91.12, 91.7,
      93.65, 90.7, 94.75, 94.18, 93.93, 93.33, 92.45, 96.38, 95.15, 92.4, 95.48,
      97.22, 97.65, 99.97, 101.88, 96.2, 94.92, 96.77, 100.72, 101.7, 99.27,
      99.83, 97.87, 94.88, 100.97, 96.67, 97.27, 98.58, 94.9, 98.82, 97.65, 95.62,
      95.67, 97.43, 86.43, 87.5, 85.97, 83.32, 85.0, 84.07, 85.67, 85.73, 87.17,
      88.77, 82.52, 92.3, 93.67, 91.15, 89.67, 93.3, 92.95, 92.55, 91.78, 93.2,
      90.07, 93.75, 94.4, 90.65, 92.12, 92.0, 93.22, 91.1, 89.05, 92.05, 91.2,
      91.88, 90.25, 90.02, 90.03, 91.98, 93.75, 93.82, 89.82, 69.8, 68.82, 68.37,
      69.93, 68.02, 69.55, 69.63, 67.78, 67.88, 70.32, 68.05, 69.12, 70.88, 76.87,
      76.67, 76.67, 76.42, 76.77, 77.72, 75.13, 76.4, 76.17, 75.5, 71.28, 70.92,
      71.03, 70.5, 69.97, 71.6, 70.28, 71.12, 70.62, 70.07, 70.97, 71.18, 70.52,
      73.18, 70.93, 72.72, 72.53, 71.87, 83.57, 83.75, 85.23, 86.43, 84.47, 85.95,
      87.85, 83.02, 83.33, 87.08, 83.75, 85.52, 88.5, 82.53, 84.68, 88.12, 90.13,
      84.47, 85.55, 84.6, 86.25, 87.95, 87.63, 86.25, 84.8, 83.42, 84.08, 84.37,
      87.4, 82.83, 85.92, 85.58, 83.4, 83.53, 93.37, 95.38, 94.93, 94.13, 95.88,
      92.18, 91.82, 94.42, 96.07, 93.52, 92.85, 93.38, 94.52, 93.92, 95.82, 93.47,
      93.38, 93.22, 95.07, 94.32, 95.08, 92.5, 93.05, 94.07, 96.18, 90.83, 95.35,
      95.58, 88.45, 88.58, 90.98, 90.08, 89.07, 89.33, 90.08, 88.92, 89.17, 90.47,
      88.57, 88.75, 91.25, 89.54, 88.77, 92.22, 89.58, 92.13, 92.17, 94.5, 94.72,
      94.6, 92.55, 94.35, 95.36, 90.47, 94.55, 93.72, 93.38, 95.53, 90.37, 90.63,
      91.77, 92.42, 91.9, 93.55, 108.53, 111.15, 105.67, 112.5, 112.37, 112.55,
      113.15, 106.62, 104.8, 111.37, 109.83, 109.77, 112.0, 106.93, 114.27,
      109.45, 110.43, 111.18, 105.87, 114.08, 112.32, 104.18, 115.37, 111.1,
      111.12, 105.58, 99.98, 102.8, 96.75, 99.65, 99.15, 103.08, 97.35, 100.0,
      95.58, 98.32, 98.43, 101.39, 101.63, 99.0, 96.75, 100.58, 101.05, 97.43,
      96.02, 100.68, 98.68, 95.92, 95.9, 98.95, 103.6, 102.98, 100.55, 117.13,
      117.08, 116.87, 114.52, 115.78, 114.85, 115.97, 118.7, 118.63, 115.57,
      115.67, 115.17, 118.92, 116.02, 115.03, 116.17, 119.78, 117.08, 116.25,
      117.8, 116.08, 71.18, 71.5, 72.0, 72.27, 71.43, 72.3, 71.43, 71.3, 71.52,
      70.82, 71.38, 74.57, 74.28, 74.28, 74.35, 74.6, 75.07, 74.42, 74.17, 74.05,
      74.82, 106.6, 103.32, 104.27, 103.15, 105.68, 106.95, 107.7, 108.23, 108.78,
      107.9, 103.2, 106.1, 106.77, 105.15, 106.28, 106.05, 106.4, 104.5, 104.53,
      106.08, 108.17, 106.9, 105.57, 107.27, 103.6, 106.4, 73.8, 74.37, 75.98,
      78.73, 78.2, 76.9, 73.43, 75.73, 73.62, 75.4, 73.1, 76.47, 79.25, 74.85,
      74.8, 73.98, 73.78, 73.9, 74.1, 78.95, 75.4, 75.12, 73.47, 73.88, 77.67,
      77.67, 74.2, 73.93, 76.12, 75.38, 76.02, 72.63, 73.72, 82.55, 75.55, 80.93,
      76.88, 76.5, 75.5, 76.18, 78.88, 78.93, 79.95, 81.38, 82.82, 77.62, 77.63,
      79.5, 75.68, 77.05, 77.43, 79.02, 78.78, 77.88, 77.97, 79.39, 77.92, 80.23,
      100.75, 98.9, 98.87, 102.8, 96.8, 97.18, 97.4, 98.68, 97.15, 101.35, 101.28,
      101.83, 103.63, 82.23, 81.43, 84.67, 84.43, 81.68, 81.48, 81.87, 82.88,
      83.07, 84.2, 83.67, 82.52, 82.93, 83.8, 81.4, 84.05, 80.67, 81.9, 99.27,
      97.02, 96.0, 99.2, 97.8, 98.4, 99.77, 99.05, 98.42, 95.78, 97.47, 97.6,
      97.65, 94.62, 97.1, 97.09, 97.38, 95.9, 97.92, 123.88, 122.75, 117.82,
      124.47, 118.95, 124.95, 121.88, 123.28, 123.22, 122.95, 121.73, 118.0,
      120.35, 118.4, 122.87, 124.05, 124.25, 117.02, 118.85, 122.6, 121.15,
      123.37, 123.0, 123.37, 121.15, 122.4, 75.43, 78.32, 80.33, 79.09, 78.63,
      78.9, 80.18, 79.87, 76.85, 77.42, 78.83, 76.3, 79.4, 76.77, 76.57, 75.02,
      75.25, 78.13, 79.93, 80.22, 75.97, 77.43, 77.83, 75.73, 76.92, 75.15, 71.58,
      71.42, 71.43, 71.25, 82.72, 80.72, 80.03, 81.12, 79.72, 82.35, 82.22, 80.8,
      78.93, 78.72, 80.47, 81.96, 98.43, 96.8, 99.32, 99.32, 103.6, 103.1, 98.22,
      102.17, 98.03, 100.43, 101.6, 101.6, 100.28, 103.07, 103.32, 96.73, 97.15,
      97.38, 82.4, 85.2, 87.42, 85.08, 89.4, 88.92, 83.98, 90.0, 89.87, 85.51,
      86.68, 86.5, 99.68, 98.03, 101.7, 97.7, 97.68, 101.48, 101.45, 97.43, 98.96,
      97.43, 97.67, 100.28, 96.37, 97.5, 97.28, 99.22, 95.55, 102.55, 96.97,
      96.83, 97.03, 96.85, 96.87, 100.92, 99.85, 106.4, 95.17, 97.35, 97.72,
      94.87, 97.83, 96.07, 104.8, 97.67, 99.17, 95.35, 95.28, 99.77, 98.58, 99.08,
      97.68, 97.82, 99.47, 100.78, 94.72, 101.82, 94.75, 104.02, 98.23, 102.18,
      98.07, 96.25, 95.45, 101.71, 94.02, 98.28, 102.05, 97.03, 100.5, 98.47,
      98.47, 102.42, 96.67, 95.87, 98.18, 97.42, 95.4, 96.92, 97.22, 98.5, 103.2,
      109.78, 110.7, 113.1, 112.58, 112.93, 113.07, 110.15, 110.72, 111.97,
      111.85, 113.03, 109.75, 112.02, 110.75, 111.72, 110.63, 113.6, 111.97,
      112.2, 109.52, 114.05, 73.15, 72.57, 72.33, 73.95, 72.02, 72.88, 78.45,
      76.2, 79.33, 77.18, 76.62, 79.82, 76.37, 79.2, 76.5, 76.28, 76.2, 76.03,
      77.3, 77.33, 79.97, 78.85, 78.98, 75.48, 122.53, 122.77, 122.33, 118.47,
      119.52, 122.28, 117.65, 122.58, 119.6, 123.97, 122.48, 119.32, 122.68,
      122.9, 119.53, 119.12, 123.5, 123.67, 117.12, 124.55, 122.22, 122.3, 122.3,
      123.15, 117.53, 117.33, 121.33, 122.58, 122.8, 118.28, 120.2, 122.65,
      120.53, 81.12, 81.22, 81.6, 80.23, 79.85, 82.55, 80.4, 77.98, 79.92, 81.43,
      80.65, 80.2, 88.52, 91.48, 88.13, 89.03, 91.25, 90.18, 89.33, 87.67, 87.9,
      88.05, 89.67, 88.53, 88.57, 89.45, 91.72, 90.27, 89.62, 110.1, 106.47,
      104.82, 109.02, 105.38, 111.0, 105.53, 110.73, 108.73, 105.68, 104.81,
      107.2, 108.45, 109.07, 106.97, 107.97, 110.42,
    ];
    for (let i = 0; i < 1217; i++) {
      distances.push(
        Math.sqrt(
          Math.pow(longs[i] - longitude, 2) + Math.pow(lats[i] - latitude, 2)
        )
      );
    }
    distances.sort(function (a, b) {
      return a - b;
    });
    if (daysToShip > 6) {
      shipCost = (packWeight * 2.2 * 6000 * 12.18) / 1000; //change
    } else if (daysToShip == 0) {
      shipCost = (packWeight * 2.2 * 40 * 12.18) / 1000; //change
    } else {
      let min = (250 / 69.0) * (daysToShip - 1); //converts to lat
      let max = (250 / 69.0) * daysToShip;
      let count = 0;
      let sum = 0;
      let index = 0;
      if (distances[index] < min) {
        while (index < distances.length - 2 && distances[index + 2] < min) {
          index++;
        }
      } else {
        while (index > 0 && distances[index - 1] > min) {
          index--;
        }
      }
      while (index != distances.length && distances[index] < max) {
        sum += distances[index];
        count++;
        index++;
      }
      shipCost = (packWeight * 2.2 * (sum / count) * 69 * 12.18) / 1000;
    }
  
    //gets production costs
    let ratioOfIndex = 0;
    let products = [
      "Clothing, Shoes, Jewelry & Watches",
      "Amazon Fresh",
      "Books",
      "Movies",
      "Music & Games",
      "Electronics",
      "Computers",
      "Smart Home",
      "Home, Garden & Tools",
      "Pet Supplies",
      "Food & Grocery",
      "Beauty & Health",
      "Toys",
      "Kids & Baby",
      "Handmade",
      "Sports",
      "Outdoors",
      "Automotive & Industrial",
      "Industrial & Scientific",
    ];
    let ratio = [
      0.057, 0.0011, 0.18, 0.018, 0.3056, 0.133, 0.3056, 0.057, 1.53, 0.01, 0.866,
      0.00277, 0.003, 0.057, 0.057, 0.057, 0.000108,
    ];
    let index = 0;
    for (index; index < products.length; index++) {
      if (type == products[index]) {
        ratioOfIndex = ratio[index];
        index += products.length;
      }
    }
    prodCost = packWeight * ratioOfIndex * 1000;
    totalCost = prodCost + shipCost;
    return totalCost / 1200; //dollars owed
  }
  
  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if (msg.from === "popup" && msg.subject === "DOMInfo") {
      // Collect the necessary data.
      // (For your specific requirements `document.querySelectorAll(...)`
      //  should be equivalent to jquery's `$(...)`.)
  
      const item_name = document.getElementById("productTitle");
      const time = document.querySelector(
        "#mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE > span > span.a-text-bold"
      );
      const size = document.querySelector(
        "#detailBullets_feature_div > ul > li:nth-child(1) > span > span:nth-child(2)"
      );
      const ranks = document.querySelector(
        "#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span"
      );
  
      async function latLong(callback) {
        const success = (position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          // window.alert(latitude);
          callback(latitude, longitude);
        };
  
        const error = () => {
          window.alert("ERROR MY BRO UH OH");
        };
  
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          window.alert("Location no no");
        }
      }
  
      function finish(lat, long) {
          let domInfo = {
              name: "hmm",
              delivery: "hmm",
              weight: "hmm",
              groups: "hmm",
              latitude: lat,
              longitude: long,
          };
          if (item_name) {
              domInfo.name = item_name.innerHTML;
          }
          if (time) {
              const oneHour = 3600000;
              const today = new Date();
              today.setTime(Date.now());
              const readable = new Date();
              if (time.innerHTML.includes("Today") || time.innerHTML.includes("Overnight")) {
                  readable.setTime(Date.now() + (6 * oneHour));
              } else {
                  const timeToDelivery = Date.parse(time.innerHTML);
                  readable.setTime(timeToDelivery)
                  if (readable.getMonth() === "January" && today.getMonth !== "January"){
                      readable.setFullYear(today.getFullYear() + 1);
                  } else {
                      readable.setFullYear(today.getFullYear());
                  }
              }
              domInfo.delivery = readable;
          }
          if (size) {
              var dimensions = size.innerHTML;
              dimensions = dimensions.split("; ")[1];
              var arr = dimensions.split(" ");
              var weight = arr[0];
              var unit = arr[1];
              if (unit === "Ounces") {
                  weight = parseFloat(weight) / 35.274;
              } else if (unit === "Pounds") {
                  weight = parseFloat(weight) / 2.2;
              }
              domInfo.weight = weight;
          }
          if (ranks) {
              domInfo.groups = ranks.innerHTML;
          }
          response(domInfo);
      }
  
      latLong(finish);
      return true;
    }
  });
  