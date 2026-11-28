# Stock Issue Voucher - Findings and Recommendations

## 1. Current System Functionality and Findings

### 1.1 Voucher Workspaces

The Stock Issue Voucher module provides several workspaces for accessing and processing voucher records:

- **My Requests:** Displays requests created by the current user.
- **All Vouchers:** Provides an overall view of stock issue vouchers.
- **To Approve:** Displays vouchers awaiting approval.
- **My Pending Approvals:** Provides approval tasks assigned to the current user.
- **Approved to Issue:** Provides access to approved vouchers awaiting stock issuance.
- **Issued Vouchers:** Provides access to vouchers in the issuance stage.

These workspaces support different responsibilities and stages of the same voucher process. They use the same underlying voucher records rather than representing separate workflows.

### 1.2 Request Creation and Voucher Information

The New Request form contains the following sections:

- **Request:** Requester, receiver, department, request date, and reference number.
- **Stock Movement:** Store, destination, operation type, return transfer, accounting entry, backorder reference, availability status, and company.
- **Cost Center:** Cost center information, which is mandatory.
- **Approval & Issue:** Preparation, approval, delivery, issuance, and reversal information.
- **Items:** Products, item codes, descriptions, units, requested quantities, approved quantities, issued quantities, available quantities, and shortage quantities.
- **Accounting, Replenishment, Approvals, and Notes:** Additional voucher information.

The form also supports submission and cancellation, with further actions becoming available according to the voucher's stage.

### 1.3 Approval Process

Vouchers progress through stages such as Draft, Submitted, Approved, and Issued.

The available actions depend on the current stage and include submission, approval, rejection, and stock issuance.

Approval information includes the approver, approval date, approval rule, current approval step, and next approvers.

### 1.4 Stock Availability and Issuance

The voucher provides several actions for handling the requested stock:

- **Check Availability:** Checks whether the requested quantities are available.
- **Reserve Stock:** Creates a related internal transfer to move the requested items from the source store to the specified destination.
- **View Internal Transfer:** Opens the associated transfer record, showing its source, destination, scheduled date, source document, and operation lines.
- **Issue Stock:** Performs the final stock issuance.

The voucher also displays availability information and tracks requested, approved, issued, and shortage quantities.

### 1.5 Approval Configuration

**Approval Rules**

Approval Rules define the conditions and approval steps applicable to stock issue requests. Their configuration includes:

- Active status and sequence.
- Company and department.
- Source location and product category.
- Minimum and maximum amounts.
- Approval Steps, where approvers can be added.

**Approval Delegations**

Approval Delegations allow approval responsibility to be assigned to another user for a specified period. Their configuration includes:

- Active status and company.
- Original User and Delegate User.
- Date From and Date To.
- Reason.

Both configuration forms provide Save and Cancel actions.

## 2. Recommendations

### 2.1 Improve Workspace Organization

Keep the different workspaces because they serve different responsibilities, but make their purposes and record eligibility clear. Ensure voucher records appear in the appropriate workspaces as they progress through the process.

Avoid duplicating the same voucher information and actions unnecessarily across workspaces.

### 2.2 Strengthen Role-Based Access and Responsibilities

Define permissions according to the user's responsibility in the process:

- **Requester:** Create requests and track their own vouchers.
- **Approver:** Review, approve, or reject assigned requests.
- **Storekeeper:** Check availability, reserve stock, and complete issuance.
- **Inventory Administrator:** Configure approval rules, manage delegations, and maintain workflow settings.

Restrict sensitive actions to authorized roles. For example, requesters should not issue stock or approve their own requests unless explicitly permitted by organizational policy.

### 2.3 Improve Approval Rule Configuration

Make approval conditions and their matching logic clear. Support multiple approval steps with a defined sequence, and ensure the system selects the appropriate rule based on the voucher's company, department, source location, product category, and amount.

The best way will be if the Rule is general, not company or location specific.

### 2.4 Improve Approval Delegation

Automatically activate and expire delegations according to their date range. Prevent invalid delegation assignments and ensure delegated approval tasks are clearly identified and traceable.

### 2.5 Improve Stock Reservation and Issuance

Clearly distinguish between checking availability, reserving stock, and issuing stock. Show the related internal transfer and its status directly on the voucher.

Allow issuance only after the required approval and stock conditions are satisfied. Where only part of the requested quantity is available, provide a clear option to issue the available quantity or retain the outstanding quantity for later fulfillment.

### 2.6 Strengthen Traceability

Maintain a complete history of voucher creation, modifications, submissions, approvals, rejections, reservations, issuances, and reversals. Record the responsible user and date for each action, with links to related inventory transfers and accounting records.
