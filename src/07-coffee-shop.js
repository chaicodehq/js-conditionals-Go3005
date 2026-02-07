/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  var totalCost = 0;
  switch (size) {
    case "small":
      totalCost = 3;
      break;
    case "medium":
      totalCost = 4;
      break;
    case "large":
      totalCost = 5;
      break;
    default:
      return -1;
  }
  switch (type) {
    case "regular":
      totalCost += 0;
      break;
    case "latte":
      totalCost += 1;
      break;
    case "cappuccino":
      totalCost += 1.5;
      break;
    case "mocha":
      totalCost += 2;
      break;
    default:
      return -1;
  }

  if (extras.whippedCream || extras.extraShot) {
    if (extras.whippedCream && extras.extraShot) {
      totalCost += 0.5 + 0.75;
      return totalCost;
    } else if (extras.extraShot) {
      totalCost += 0.75;
      return totalCost;
    } else if (extras.whippedCream) {
      totalCost += 0.5;
    }
  }
  return totalCost;
}
