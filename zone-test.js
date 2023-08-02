const zones = [];

const createZone = (zoneName, zoneSize) => {
  let xAxis, yAxis;
  if (zoneSize === "small") {
    yAxis = 20;
    xAxis = 20;
  } else if (zoneSize === "medium") {
    yAxis = 35;
    xAxis = 35;
  } else if (zoneSize === "large") {
    yAxis = 50;
    xAxis = 50;
  }

  const zoneGrid = [];

  for (let i = 0; i < yAxis; i++) {
    const row = [];
    for (let j = 0; j < xAxis; j++) {
      row.push(null);
    }
    zoneGrid.push(row);
  }

  const createdZone = {
    zoneName,
    zoneGrid,
  };

  zones.push(createdZone);
  return zoneGrid;
};

let grid = createZone("test", "small");

const createTable = (tableName, xPos, yPos) => {
  grid[yPos][xPos] = tableName;
};

createTable("proba", 5, 5);

console.log(JSON.stringify(zones));
