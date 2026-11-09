# Inventory Adjustment – Findings and Recommendations

## 1. Overview

This document presents findings from reviewing the current Inventory Adjustment functionality and recommends improvements to make inventory corrections more accurate, transparent, and accountable.

## 2. Current Findings

The current Inventory Adjustment form provides:

- Location
- Product
- Package
- Owner
- Counted Quantity
- Scheduled Date
- User

It also provides Save, Discard/Cancel, Add Another, and Apply All actions.

The form supports basic inventory counting and adjustment, but additional information and controls could improve the process.

## 3. Recommended Improvements

### 3.1 Adjustment Reason

**Finding:** The current form does not visibly provide a dedicated field for explaining why an adjustment is required.

**Recommendation:** Add a required **Adjustment Reason** dropdown field.

Suggested options:

- Physical Count Correction
- Damaged Products
- Expired Products
- Missing Products
- Found Extra Stock
- Data Entry Correction
- Incorrect Previous Transaction
- Other

Also add an optional **Reason Description** text field to provide additional details.

**Suggested location:** Place these fields below Counted Quantity or in a separate Adjustment Details section.

### 3.2 Quantity Comparison

**Finding:** The current form displays Counted Quantity, but the system quantity and the resulting difference are not visibly displayed in the registration form.

**Recommendation:** Display the following fields:

- **System Quantity:** Existing quantity recorded in the selected location.
- **Counted Quantity:** Actual quantity entered by the user.
- **Difference:** Automatically calculated quantity difference.
- **Adjustment Type:** Increase or Decrease.

Calculation:

`Difference = Counted Quantity - System Quantity`

**Suggested location:** Display System Quantity beside Counted Quantity and show Difference and Adjustment Type automatically after the count is entered.

### 3.3 Review and Approval Workflow

**Finding:** The current interface provides an Apply All action, but a separate review and approval process is not visible in the provided form.

**Recommendation:** Consider introducing a controlled review process for organizations that require authorization before stock quantities are changed.

Suggested information:

- Prepared By
- Counted By
- Reviewed By
- Approved By
- Approval Date
- Adjustment Status
- Rejection Reason

Suggested workflow:

`Draft → Submitted → Approved → Applied`

Rejected adjustments should retain the rejection reason and remain available for review.

**Suggested location:** Add a separate Review and Approval section or display these details in the adjustment record.

### 3.4 Supporting Documents (Optional / Future Improvement)

**Recommendation:** Allow users to attach supporting documents when necessary.

Examples:

- Physical counting sheets
- Inspection reports
- Damage reports
- Photographs
- Other supporting documents

**Suggested location:** Add an Attachments section to the adjustment record.

### 3.5 Adjustment History and Audit Trail

**Finding:** A detailed adjustment history is not visible in the provided registration form.

**Recommendation:** Maintain a history of each applied adjustment, including:

- Original system quantity
- Counted quantity
- Difference
- Adjustment reason
- Created by
- Reviewed and approved by, where applicable
- Date and time
- Final status
- Related inventory transaction reference

Users should be able to view the history without modifying the original transaction.

**Suggested location:** Add an Adjustment History or Audit Trail section to the adjustment record.

### 3.6 Additional Validations and Functional Improvements

Consider implementing the following optional features:

- **Negative Stock Warning:** Alert users when an adjustment could result in an invalid or negative stock balance. Validate the resulting quantity before applying the adjustment.

- **Batch and Lot Number Tracking (Optional):** For products configured with lot tracking, add a **Lot/Batch Number** field to the adjustment form, preferably below Product. Retrieve existing batches associated with the selected product and location.

- **Serial Number Tracking (Optional):** For products configured with serial-number tracking, display a **Serial Number(s)** field below Product or conditionally after product selection. Allow users to identify individual items being counted and validate that serial numbers belong to the selected product.

- **Expiry Date Tracking (Optional):** For products configured with expiry tracking, display an **Expiration Date** alongside the Lot/Batch Number. Preferably retrieve the date automatically from the selected batch. This helps identify expired and near-expiry products.

- **Duplicate Adjustment Warnings:** Warn users when another pending adjustment exists for the same product and location.

- **Recount Functionality:** Allow a second physical count when the initial count requires verification.

- **Controlled Reversal:** Provide an authorized way to reverse an applied adjustment while preserving the original transaction and its history.

**Implementation Note:** Batch numbers, serial numbers, and expiry dates should appear only when required by the selected product's tracking configuration. They should not be mandatory for all products.

## 4. Recommended Form Layout

The following is a suggested organization of the improved form:

| Section                        | Suggested fields                                               |
| ------------------------------ | -------------------------------------------------------------- |
| Product and Location           | Location, Product, Package, Owner                              |
| Counting Details               | System Quantity, Counted Quantity, Difference, Adjustment Type |
| Adjustment Details             | Adjustment Reason, Reason Description, Scheduled Date          |
| Product Tracking (Conditional) | Lot/Batch Number, Serial Number(s), Expiration Date            |
| Responsibility                 | User, Counted By                                               |
| Review and Approval            | Reviewed By, Approved By, Approval Date, Status                |
| Supporting Information         | Attachments, Adjustment History                                |

## 5. Expected Outcomes

The proposed improvements should:

- Make inventory adjustments explainable.
- Reduce incorrect stock corrections.
- Improve accountability and authorization.
- Support batch, serial number, and expiry tracking.
- Provide a reliable history of inventory changes.
- Improve inventory accuracy and reporting.
