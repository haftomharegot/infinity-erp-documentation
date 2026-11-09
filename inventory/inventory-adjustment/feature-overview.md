# Inventory Adjustment – Feature Overview

## 1. Overview

Inventory Adjustment is the process of updating the quantity recorded in an inventory management system when it differs from the actual physical quantity available in a storage location.

It helps organizations maintain accurate inventory records by allowing authorized users to record physical counts and correct stock discrepancies.

## 2. Purpose

Inventory Adjustment is used to:

- Maintain accurate inventory quantities.
- Identify differences between recorded and actual stock.
- Correct inventory record errors.
- Account for stock discrepancies discovered during physical counting.
- Improve inventory accountability and reporting.

## 3. Business Use Cases

Inventory adjustments may be required in situations such as:

- **Physical Count Differences:** The actual quantity differs from the quantity recorded in the system.
- **Damaged Products:** Some items are damaged and are no longer available for normal use.
- **Expired Products:** Products have passed their expiry dates and should no longer be treated as usable stock.
- **Missing Products:** Recorded stock cannot be located during physical counting.
- **Unexpected Stock:** Physical counting discovers products that are not recorded in the system.
- **Data or Transaction Errors:** Previous entries or inventory transactions were recorded incorrectly.

> Inventory Adjustment should be used to correct verified stock discrepancies. Normal stock movements, such as receipts, deliveries, transfers, and returns, should be recorded through their respective operations.

## 4. Current System Functionality

The current Inventory Adjustment form provides the following fields:

| Field            | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| Location         | The warehouse or storage location where the product is physically counted. |
| Product          | The product whose inventory quantity is being checked.                     |
| Package          | The package associated with the product, where applicable.                 |
| Owner            | The owner of the inventory, where ownership tracking is used.              |
| Counted Quantity | The quantity physically counted by the user.                               |
| Scheduled Date   | The date assigned to the inventory counting activity.                      |
| User             | The user associated with the adjustment record.                            |

The current interface also provides the following actions:

- **Save:** Saves the entered adjustment record.
- **Discard / Cancel:** Cancels the current entry without saving it.
- **Add Another:** Adds another adjustment line.
- **Apply All:** Applies the recorded inventory adjustments.

## 5. General Adjustment Concept

An inventory adjustment compares the quantity recorded in the system with the quantity physically counted.

**Adjustment Difference = Counted Quantity − System Quantity**

Example:

| Description           | Quantity |
| --------------------- | -------: |
| System Quantity       |      100 |
| Counted Quantity      |       95 |
| Adjustment Difference |       -5 |

In this example, the system records 100 units, but the physical count identifies only 95 units. The adjustment reduces the recorded quantity by 5 units.

## 6. Expected Business Benefits

Inventory Adjustment helps organizations:

- Maintain reliable stock information.
- Improve inventory accuracy.
- Identify and investigate discrepancies.
- Support better purchasing and replenishment decisions.
- Maintain accountability for inventory changes.
- Improve inventory reporting and control.
