# Replenishment - Findings and Recommendations

## 1. Current System Functionality and Findings

The Replenishment workflow provides functionality for configuring replenishment rules, monitoring stock levels, and initiating replenishment activities.

It allows users to configure replenishment parameters for products at specific stock locations and warehouses. The system displays stock information and provides actions for managing replenishment requirements.

### 1.1. Replenishment List

The Replenishment list displays configured replenishment records with the following information:

- **Product:** Product associated with the replenishment rule.
- **Location:** Stock location where the replenishment rule applies.
- **Warehouse:** Associated warehouse.
- **On Hand:** Current stock quantity.
- **Forecast:** Forecasted stock quantity.
- **Visibility Days:** Configured visibility period.
- **Route:** Replenishment route.
- **Bill of Materials:** Associated Bill of Materials, where applicable.
- **Vendor:** Associated vendor.
- **Trigger:** Replenishment trigger.
- **EOQ Managed:** Indicates whether Economic Order Quantity management is enabled.
- **Procurement Group:** Associated procurement group.
- **Min:** Minimum stock quantity.
- **Max:** Maximum stock quantity.
- **Multiple Quantity:** Configured ordering quantity multiple.
- **To Order:** Quantity indicated for ordering.
- **UoM:** Unit of measure.

The list provides two display options:

**List View:** Displays replenishment records in a table with their stock quantities, replenishment parameters, and procurement information.

**Card View:** Displays individual replenishment records as cards, showing the product and its minimum and maximum quantities.

### 1.2. Search, Filters, and Grouping

The available filters include:

- Trigger Manual
- To Reorder
- Not Snoozed
- Add Custom Filter

Records can be grouped by:

- Warehouse
- Location
- Product
- Category
- Add Custom Group

The Favorites option allows users to save the current search.

### 1.3. Creating and Editing Replenishment Records

The New action opens a registration form for creating replenishment configurations.

The form contains the following fields:

**Product and Location**

- Product
- Location
- Warehouse

**Replenishment and Procurement**

- Route
- Bill of Materials
- Vendor
- Trigger
- Procurement Group

**Additional Configuration**

- Visibility Days
- EOQ Managed

**Quantity Configuration**

- Min
- Max
- Multiple Quantity
- To Order

The form provides an Add another option for entering additional configurations before saving.

Opening an existing record displays its configuration in an editable registration section. Users can modify the available fields, save changes, or cancel the operation. The editing interface also provides the Add another option.

### 1.4. Replenishment Actions

The workflow provides several actions for managing replenishment requirements.

**A. Replenish**

The Replenish action provides two options:

- **Order:** Initiates the ordering process.
- **Order Max:** Provides an alternative ordering option based on the configured maximum quantity.

When Order was tested, the system displayed a warning indicating that it could not generate a purchase order because no matching vendor price was available. The warning identified possible causes, including an undefined vendor, minimum quantity not reached, or invalid dates.

The warning provides Edit Product and Close actions.

**B. Automate**

The Automate action is available on individual replenishment records. When tested, it displayed the same vendor-related warning encountered when using Order. Its exact operational difference from Order was not established.

**C. Snooze**

The Snooze action allows users to postpone replenishment for a selected period.

The available options are:

- 1 Day
- Week
- Month
- Custom

After selecting a duration, users confirm the action using the Snooze button.

There is no clear visual indicator on the record showing that it has been snoozed. However, the Not Snoozed filter can be used to display records that are not currently snoozed.

### 1.5. Record Management

The More menu provides the following actions:

- Export
- Archive
- Unarchive
- Duplicate
- Delete

These actions support the management of replenishment records.

### 1.6. Findings

**A. The Replenishment Configuration Contains Several Different Types of Parameters**

The form combines stock thresholds, procurement information, replenishment methods, and additional settings in one configuration.

Although this provides flexibility, it makes the configuration relatively complex. Some fields, such as Bill of Materials, Vendor, EOQ Managed, and Procurement Group, may only be relevant to particular replenishment scenarios.

**B. The Ordering Quantity Calculation Is Not Transparent**

The list displays On Hand, Forecast, Min, Max, Multiple Quantity, and To Order. However, the relationship between these values and the resulting ordering quantity is not sufficiently clear from the interface.

**C. Ordering Depends on Product Purchasing Information**

The attempted ordering process could not generate a purchase order because the system could not find a matching vendor price. This indicates that replenishment configuration and product purchasing information must be properly connected for ordering to succeed.

**D. The Ordering Actions Are Not Clearly Distinguished**

The system provides Order, Order Max, and Automate. However, the exact difference between these actions is not sufficiently clear from the available interface and testing.

**E. Snoozed Records Have Limited Visibility**

Although users can postpone replenishment and filter out snoozed records, the list does not clearly indicate which records are snoozed or when their snooze periods expire.

---

## 2. Recommendations

### 2.1. Simplify the Replenishment Configuration

The current form combines several parameters that may not be necessary for every replenishment scenario.

**Recommendation:**

- Make Product, Location, Minimum Quantity, and Maximum Quantity the primary configuration fields.
- Move procurement-specific settings, such as Vendor, Route, and Procurement Group, into an optional procurement section.
- Display Bill of Materials only when the selected replenishment route or product type requires manufacturing.
- Show EOQ-related settings only when EOQ-based replenishment is enabled.
- Review Visibility Days and Multiple Quantity to establish whether they are genuinely required for the intended replenishment process. Remove them if they do not provide a necessary business function.

**Proposed approach:** Use a simple default replenishment configuration and reveal additional settings only when the selected replenishment method requires them. This would reduce unnecessary complexity for ordinary users without removing advanced capabilities.

### 2.2. Adopt a Clear Min-Max Replenishment Method

The system already provides minimum and maximum quantities, but the calculation and purpose of the suggested ordering quantity are not sufficiently clear.

**Recommendation:**

Adopt a clearly defined Min-Max replenishment method:

1. Monitor the forecasted stock quantity for each product and location.
2. When the forecasted quantity falls below the minimum threshold, identify the product as requiring replenishment.
3. Calculate the suggested quantity as the difference between the maximum quantity and the forecasted quantity.
4. Apply the configured ordering multiple, where applicable.
5. Display the calculated quantity and its calculation basis before the user confirms an order.

For example, if the maximum quantity is 100 units and the forecasted quantity is 30 units, the suggested replenishment quantity would be 70 units before applying any ordering multiple.

This provides users with a predictable and understandable replenishment method.

### 2.3. Consolidate and Clarify Replenishment Actions

Order, Order Max, and Automate should not leave users guessing about their different purposes.

**Recommendation:**

- Use one primary **Replenish** action to initiate replenishment.
- Let the system calculate the suggested quantity using the configured replenishment rule.
- Allow users to review or adjust the quantity before confirming.
- Treat automatic replenishment as a configuration of the replenishment rule rather than an unexplained action beside individual records.
- If Order Max provides a genuinely different business operation, retain it as an explicit alternative and explain that difference in the interface.

This creates a simpler process: identify the requirement, review the quantity, and confirm the replenishment.

### 2.4. Integrate Vendor Validation into the Replenishment Process

A replenishment requirement should not reach the ordering stage without checking whether the required purchasing information is available.

**Recommendation:**

- Validate vendor availability and applicable vendor prices when calculating or preparing replenishment.
- Identify products with missing or invalid purchasing information before users attempt to order.
- Display the exact validation issue alongside the affected product.
- Provide a direct link to the relevant purchasing configuration.
- Where multiple valid vendors exist, allow the appropriate vendor to be selected according to the organization's purchasing rules.

This would make procurement failures easier to prevent rather than relying on users to discover them through warning messages.

### 2.5. Improve Snooze Management

Snoozing should temporarily remove a replenishment requirement from immediate attention without making it invisible.

**Recommendation:**

- Display a visible Snoozed status on affected records.
- Show the snooze expiration date.
- Provide separate filters for Active and Snoozed replenishment records.
- Automatically restore the record to active monitoring when the snooze period expires.
- Allow users to cancel or modify an existing snooze.

This makes postponed replenishment requirements easier to track and prevents them from being overlooked.

### 2.6. Improve Replenishment Visibility

The current list provides useful stock information, but users should be able to understand the replenishment situation immediately.

**Recommendation:**

- Introduce clear statuses such as **Sufficient Stock**, **Replenishment Required**, **Snoozed**, and **Ordering Issue**.
- Display the suggested ordering quantity prominently.
- Show the reason a product requires replenishment.
- Include current stock, forecasted stock, and suggested quantity in the card view.
- Provide a direct link to any purchase order generated from a replenishment action.

This would make the workflow more useful for daily inventory monitoring and procurement planning.

### 2.7. Maintain Replenishment Activity History

The workflow should provide visibility into what happened after a replenishment requirement was identified.

**Recommendation:**

Maintain a history of important replenishment activities, including:

- Replenishment requirement identified.
- Suggested quantity calculated.
- Order initiated and purchase order generated.
- Ordering validation failure.
- Replenishment snoozed and reactivated.
- Replenishment configuration modified.

Each activity should include the responsible user and relevant date and time. This would help users track outstanding requirements, investigate problems, and understand previous replenishment decisions.
