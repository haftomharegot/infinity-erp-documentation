# Manufacturing – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Manufacturing List

The Manufacturing workflow provides a central list for viewing and managing manufacturing orders. It supports different display views and record organization options.

### 1.1 List View

The list view displays manufacturing orders with information covering:

- **Reference:** Manufacturing order identification.
- **Start and End:** Production start and end information.
- **Deadline:** The expected completion deadline.
- **Product:** The product being manufactured.
- **Lot/Serial Number:** Lot or serial information associated with the product, where applicable.
- **Bill of Material:** The BoM associated with the manufacturing order.
- **Next Activity:** Displays the next scheduled activity, where available.
- **Source:** Indicates the source of the manufacturing order.
- **Responsible:** The user responsible for the order.
- **Component Status:** Provides information about component availability or readiness.
- **MO Readiness:** Displays the manufacturing order's readiness information.
- **Quantity and UoM:** The production quantity and its unit of measure.
- **Expected and Real Duration:** Production duration information.
- **Company:** The company associated with the order.
- **State:** The current manufacturing order status.

### 1.2 Card View

The system also provides a card view for displaying manufacturing orders in a more visual format. It presents selected order information, including the reference, product, quantity, date information, and status.

### 1.3 Search, Filters, and Grouping

The list provides search, filtering, grouping, and favorite-search options.

**Available filters observed include:**

- To Do
- Unbuilt
- Done
- Cancelled
- Starred
- Draft
- Confirmed
- Planned
- In Progress
- To Close
- MO Pending
- MO Ready
- Late
- Delayed Productions
- Components Available
- Late Availability

**Available grouping options include:**

- Product
- Status
- Material Availability
- Procurement Group
- Date
- Add Custom Group

These options help users locate manufacturing orders and organize them according to different production criteria.

## 2. Opening a Manufacturing Order

Opening a manufacturing order provides a detailed view of the production record.

The detail view includes the following main areas:

### 2.1 Manufacturing Order Information

The main information area displays:

- Product
- Production quantity
- Bill of Materials
- Start Date
- Scheduled End
- Responsible user

The record also displays the manufacturing order's status stages and provides an **Unbuild** action.

### 2.2 Manufacturing Order Tabs

The detail view contains four main tabs:

**Components**

Displays the materials required for production, including information such as:

- Product
- Source location
- Quantity to consume
- Unit of Measure
- Consumed status

The tab also provides options to add component lines and access the product catalog.

**Work Orders**

Provides a separate area for work-order information associated with manufacturing.

**By-Products**

Provides a separate area for recording additional products generated during production.

**Miscellaneous**

Displays additional manufacturing configuration and reference information, including:

- Operation Type
- Components Location
- Finished Products Location
- Source
- Company

### 2.3 Manufacturing Status and Activity History

The manufacturing order displays status stages:

- Draft
- Confirmed
- Done

The activity log records manufacturing-related events and status changes, including the user and time associated with each recorded activity.

## 3. Manufacturing Order Creation

The New button opens a form for creating a manufacturing order.

### 3.1 Main Information

The creation form includes:

- **Product:** The product to be manufactured.
- **Quantity:** The quantity associated with the manufacturing order.
- **To Produce:** The production quantity information displayed alongside the quantity field.
- **Bill of Material:** The BoM associated with the production.
- **Scheduled Date:** The planned production date.
- **Responsible:** The user responsible for the manufacturing order.

### 3.2 Manufacturing Tabs

The new form provides the same four main tabs:

- **Components:** Includes options to add component lines and access the catalog.
- **Work Orders:** Provides an area for work-order information.
- **By-Products:** Provides an area for additional production outputs.
- **Miscellaneous:** Provides additional manufacturing configuration information.

### 3.3 Creation Actions and Status

The form provides Save and Cancel actions, as well as a Confirm action. The displayed status stages are Draft, Confirmed, and Done.

## 4. Additional Manufacturing Actions and Reports

The manufacturing order detail view provides several additional actions for reviewing production and inventory information.

### 4.1 Product Moves

The Product Moves action opens an inventory movement view associated with the manufacturing order.

The view displays movement records with information including:

- Date
- Reference
- Product
- Source Location
- Destination Location
- Quantity
- Unit of Measure

This provides a way to review the inventory movements associated with the manufacturing process.

### 4.2 Traceability Report

The Traceability action opens a report containing manufacturing-related product movement information.

The report displays:

- Reference
- Product
- Date
- Lot/Serial Number
- From
- To
- Quantity

A Print action is also available.

### 4.3 Manufacturing Order Overview

The Overview action opens a manufacturing order report showing production quantities and cost-related information.

The report includes:

- Product
- Quantity
- Unit Cost
- Real Cost
- Component cost information
- Total Cost of Components
- Cost of Components per Unit

The report also provides Print and Unfold actions.

The exact calculation and accounting treatment of the displayed cost figures should be verified with the relevant costing and accounting configuration before they are treated as authoritative.

## 5. Overall Findings About the Current System

The current Manufacturing workflow provides a broad set of features for managing production orders and reviewing their related inventory information.

The main findings are:

1. **Multiple list views:** Manufacturing orders can be viewed using both list and card layouts.
2. **Search and organization:** Users can search, filter, group, and save favorite searches using several production-related criteria.
3. **Production information:** Manufacturing orders contain product, quantity, BoM, date, and responsible-user information.
4. **Production components:** The system provides a dedicated area for recording and reviewing components required for production.
5. **Separate production tabs:** Work Orders, By-Products, and Miscellaneous information are organized separately from Components.
6. **Status tracking:** Manufacturing orders have visible status stages and an activity history.
7. **Inventory movement visibility:** Product Moves provides access to inventory movements associated with manufacturing orders.
8. **Traceability:** A dedicated report provides product movement and traceability information.
9. **Production overview:** The system provides an overview report containing production quantities and cost-related information.
10. **Additional action:** An Unbuild action is available on the manufacturing order detail view.

Although the workflow provides several useful production management features, some areas would benefit from clearer explanations, improved guidance, and further verification of their behavior.

# Part II: Recommendations for Improvement

## 6. Improve Manufacturing Order Creation

The creation form should guide users through the information required to create a valid manufacturing order.

Recommended improvements:

- Provide clear descriptions for Product, Quantity, To Produce, Bill of Materials, and Scheduled Date.
- Make the relationship between the selected product and its available BoMs clear.
- Explain how the system determines or uses the production quantity.
- Validate required information before allowing confirmation.
- Provide clear feedback when required components or production information are missing.

## 7. Improve Component Management and Availability Information

The Components tab should make it easy to understand the materials required for production and whether they are available.

Recommended improvements:

- Clearly distinguish required component quantities from quantities already consumed.
- Display available stock for each component.
- Provide clear warnings when components are insufficient.
- Make the source location and unit of measure easy to identify.
- Provide clear information about component consumption and its effect on inventory.

## 8. Clarify Work Orders and By-Products

The purpose and usage of Work Orders and By-Products should be clearly explained within the manufacturing workflow.

Recommended improvements:

- Provide brief guidance describing when and how work orders should be used.
- Explain how work orders relate to the main manufacturing order.
- Clarify how by-products are recorded and how their quantities affect inventory.
- Provide appropriate guidance when these sections are empty or not required for a particular manufacturing process.

## 9. Improve Manufacturing Status and Progress Tracking

The status stages should clearly communicate what actions are required at each stage.

Recommended improvements:

- Provide short descriptions for Draft, Confirmed, and Done.
- Explain the conditions required to move an order from one stage to another.
- Display clear readiness information before confirmation or completion.
- Provide meaningful warnings when an order cannot progress.
- Make the activity history easy to review and understand.

## 10. Improve Inventory Movement and Traceability

Product Moves and Traceability are important for understanding the relationship between production and inventory.

Recommended improvements:

- Make it clear which movements represent component consumption and which represent finished product production.
- Provide direct navigation between the manufacturing order and its related inventory movements.
- Ensure the Traceability Report clearly identifies relevant lot or serial information where applicable.
- Provide consistent movement references and dates across the manufacturing order, inventory movement records, and traceability report.

## 11. Improve Manufacturing Cost Information

The Manufacturing Overview provides cost-related information, but its displayed values and calculations should be clear to users.

Recommended improvements:

- Clearly define Unit Cost, Real Cost, and Total Cost of Components.
- Explain how component costs contribute to the total manufacturing cost.
- Ensure cost values are calculated and displayed consistently.
- Clarify the relationship between manufacturing costs and inventory valuation.
- Ensure the displayed figures can be reconciled with the relevant accounting records.

## 12. Improve Field Guidance and Terminology

Some fields and actions may not be self-explanatory to users who are unfamiliar with manufacturing operations.

Recommended improvements:

- Add short descriptions or tooltips for important fields.
- Clarify the meaning of Source, Components Location, and Finished Products Location.
- Explain the purpose and expected effect of the Unbuild action.
- Use consistent terminology across manufacturing orders, inventory movements, and related reports.

## 13. Conclusion

The current Manufacturing workflow provides a useful foundation for managing manufacturing orders, components, production progress, inventory movements, and traceability.

The main improvement opportunities are to make the production process easier to understand, provide clearer component availability information, improve status guidance, and ensure that movement and cost information is transparent and consistent.
