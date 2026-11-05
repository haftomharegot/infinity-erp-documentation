# Inventory Adjustment

## 1. Overview

Inventory Adjustment is the process of correcting the stock quantity recorded in the ERP system when it differs from the actual physical quantity available in a warehouse or storage location.

It helps maintain accurate inventory records, track stock differences, and ensure accountability for inventory changes.

## 2. Real-World Problem

In a water supply organization, warehouses store different materials, including pipes, fittings, chemicals, spare parts, and other consumable products.

Sometimes, the quantity recorded in the ERP system does not match the actual physical quantity available in the warehouse.

Possible causes include:

- Unrecorded stock issues or returns.
- Damaged or expired products.
- Lost or missing products.
- Previous data-entry mistakes.
- Incorrect stock transfers.
- Differences discovered during physical counting.

The organization needs a controlled process to investigate, document, and correct these differences.

## 3. Current System Functionality

The current Inventory Adjustment form provides the following fields:

- **Location:** The warehouse or storage location where the product is stored.
- **Product:** The item being counted.
- **Package:** The package containing the product, if applicable.
- **Owner:** The owner of the inventory.
- **Counted Quantity:** The actual quantity found during physical counting.
- **Scheduled Date:** The date scheduled for the inventory count.
- **User:** The user associated with the adjustment.

The form also provides the following actions:

- **Save:** Saves the entered information.
- **Discard:** Cancels the current changes.
- **Apply All:** An action for applying the selected inventory adjustments. Its exact behavior and validation rules should be verified in the current system.

## 4. Proposed Improvements

### 4.1 Adjustment Reason

Introduce a required field called **Adjustment Reason** to explain why the stock quantity needs to be corrected.

Suggested reasons:

- Physical Count Correction
- Damaged Goods
- Expired Products
- Lost or Missing Products
- Found Extra Stock
- Data Entry Correction
- Incorrect Previous Transaction
- Other

Also it is better if there is a **Reason Description** field where users can provide additional explanations.

### 4.2 Quantity Comparison

The system should display the existing recorded quantity alongside the physical counted quantity.

Recommended fields:

- **System Quantity:** The quantity currently recorded in the ERP.
- **Counted Quantity:** The actual quantity found during physical counting.
- **Difference:** The difference between the counted quantity and the system quantity.
- **Adjustment Type:** Indicates whether stock will increase or decrease.

The difference should be calculated automatically:

`Difference = Counted Quantity - System Quantity`

Example:

| Description      | Quantity |
| ---------------- | -------: |
| System Quantity  |      200 |
| Counted Quantity |      185 |
| Difference       |      -15 |
| Adjustment Type  | Decrease |

This allows users to review the stock difference before applying the adjustment.

### 4.3 Approval and Responsibility

Introduce a controlled review and approval process to ensure that inventory adjustments are properly verified and authorized.

Recommended information:

- **Prepared By:** User who creates the adjustment.
- **Counted By:** Person who physically counts the inventory.
- **Reviewed By:** Person who verifies the adjustment.
- **Approved or Rejected By:** Authorized person responsible for the decision.
- **Approval Date:** Date of approval or rejection.
- **Adjustment Status:** Current stage of the adjustment.

Suggested workflow:

`Draft → Submitted → Approved → Applied`

Rejected adjustments should retain the rejection reason for future reference.

### 4.4 Adjustment History and Audit Trail

The system should maintain a complete history of inventory adjustments.

Recommended information to record:

- Original system quantity.
- Counted quantity.
- Adjustment difference.
- Adjustment reason and description.
- User who created the adjustment.
- User who reviewed and approved it.
- Date and time of each important action.
- Previous and updated stock quantities.
- Final adjustment status.

This information helps management understand why stock quantities changed and identify who performed or authorized each action.

### 4.5 Additional Validations and Functional Improvements

Consider implementing the following improvements:

- **Duplicate Adjustment Warning:** Prevent accidental duplicate adjustments for the same product and location.
- **Negative Stock Warning:** Alert users when an adjustment could result in an invalid or negative stock balance.
- **Batch and Lot Number Tracking(Optional):** For products configured with lot tracking, add a Lot/Batch Number field to the adjustment form, preferably below the Product field. This allows users to identify the specific batch being counted. The system should retrieve existing batches associated with the selected product and location.
- **Serial Number Tracking(Optional):** For products configured with serial-number tracking, add a Serial Number(s) field below the Lot/Batch Number field or display it conditionally after selecting the product. This allows users to identify individual items being counted. The system should validate that serial numbers are unique and belong to the selected product.
- **Expiry Date Tracking(Optional):** For products with expiry tracking, display an Expiration Date field alongside the Lot/Batch Number field. The expiry date should preferably be retrieved automatically from the selected batch, rather than manually entered for every adjustment. This helps identify expired or near-expiry products, particularly chemicals.
- **Recount Functionality:** Allow another physical count when a stock difference requires verification.
- **Controlled Reversal:** Provide an authorized way to reverse an incorrectly applied adjustment while preserving its history.

## 5. Recommended Workflow

1. Select the warehouse location and product.
2. Enter the actual physical counted quantity.
3. Retrieve and display the existing system quantity.
4. Automatically calculate the difference.
5. Select the adjustment reason.
6. Enter a description explaining the difference.
7. Submit the adjustment for review.
8. The responsible person reviews and approves or rejects it.
9. Apply the approved adjustment to update the stock quantity.
10. Record the complete adjustment history for future reference.

## 6. Future Enhancement: Supporting Documents

Supporting document attachments are not included in the initial implementation scope.

They can be considered in a future enhancement to allow users to attach evidence such as:

- Physical counting sheets.
- Inspection reports.
- Damage reports.
- Photographs of damaged products.
- Other relevant supporting documents.

## 7. Expected Outcome

The improved Inventory Adjustment feature should:

- Maintain accurate stock quantities.
- Make every adjustment explainable and traceable.
- Reduce unauthorized stock corrections.
- Improve warehouse accountability.
- Provide a reliable audit trail.
- Support better inventory management and financial reporting.
