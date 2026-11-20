# Packages – Findings and Recommendations

# Part I: Current System Functionality and Findings

## 1. Packages List

The Packages menu provides a separate interface for viewing registered packages.

The reviewed page provides:

- List View and Card View.
- Search and Filters.
- Group By.
- Favorites and Saved Searches.
- Import and Export.

The observed list columns include:

| Column       | Meaning                                      |
| ------------ | -------------------------------------------- |
| Display Name | Name or reference displayed for the package. |
| Package Type | Package classification.                      |
| Location     | Location associated with the package.        |
| Company      | Company associated with the package.         |

The available filter includes **In internal locations**, while grouping options include **Location** and **Package Type**.

## 2. Opening an Existing Package

An example inspected package record was `PACK0000001`.

The form displayed:

| Field             | Observed Information |
| ----------------- | -------------------- |
| Package Reference | PACK0000001          |
| Package Type      | 126553               |
| Company           | Associated company   |
| Owner             | Package owner        |
| Location          | Associated location  |
| Pack Date         | 11/02/2026           |

### 2.1 Package Content

The Content section contains the following columns:

- Product
- Lot/Serial Number
- Quantity
- Unit of Measure

These fields are intended to display the products and quantities associated with a package.

The form also provides **Unpack** and **Package Transfers** actions.

## 3. Creating a New Package

The New Package form displays fields similar to the existing package record:

- Package Reference
- Package Type
- Company
- Owner
- Location
- Pack Date

It also displays a Content section.

**Finding:** The Content section appears as an empty area, but the reviewed form does not provide an Add a line option or another visible way to enter products and quantities. The section cannot be populated through the available interface.

This makes the package creation process incomplete from the user's perspective because the form provides space for package contents without providing a way to define them.

## 4. Package Transfers

Selecting **Package Transfers** opens a separate transfer list associated with the selected package.

The example reviewed page displayed:

- Package reference: PACK0000001
- Search and list controls.
- Operational snapshot.
- Matching records: 0.
- No visible transfer records.

### 4.1 Creating a Package Transfer

Selecting New opens a **Create Stock Transfer** form.

The observed fields include:

| Field                | Meaning                                       |
| -------------------- | --------------------------------------------- |
| Contact              | Contact associated with the transfer.         |
| Operation Type       | Type of stock operation.                      |
| Source Location      | Location from which products are transferred. |
| Destination Location | Location receiving the products.              |
| Scheduled Date       | Planned transfer date.                        |
| Source Document      | Reference to the originating document.        |

The form also displays:

- Status: Draft
- Priority: Normal
- Source Document

### 4.2 Operations

The Operations section contains:

- Product
- Packaging
- Demand
- Unit

An **Add a line** option is available for entering operation lines.

### 4.3 Additional Information

The form provides two additional tabs:

- Additional Info
- Note

### 4.4 Transfer Actions and Stages

The actions include:

- Mark as Todo
- Validate
- Return
- Cancel
- Discard
- Save Transfer

The displayed stages are:

- Draft
- Waiting
- Ready
- Done

The form provides the fields and actions needed to prepare and process a stock transfer.&#x20;

## 5. Overall Findings

The Packages workflow provides package records, package information, content columns, and access to transfer operations.

However, the review identified three important issues:

1. **Package Content Entry:** The New Package form displays a Content section but provides no visible way to add products or quantities.
2. **Package Transfer Relationship:** The Package Transfers action opens a general Create Stock Transfer form. The relationship between the selected package and the transfer is not sufficiently clear for normal users.
3. **Package Information Clarity:** Fields such as Package Type, Owner, and Package Reference should have clearer explanations to help users understand their purpose.

# Part II: Recommendations for Improvement

## 6. Improve Package Creation and Content Management

The New Package form should allow users to define the contents of a package.

Recommended improvements:

- Provide an Add a line option in the Content section.
- Allow users to select products and relevant lots or serial numbers.
- Allow users to enter quantities and units of measure.
- Display the added contents before saving.
- Validate package contents before completing the operation.

## 7. Clarify Package Transfers

The relationship between a package and its transfers should be clear.

Recommended improvements:

- Make the selected package visible in the transfer form.
- Clearly identify whether the transfer moves the entire package or individual products.
- Display the package and its contents in the relevant transfer information.
- Provide clear links between the package record and its transfer history.

## 8. Improve Field Guidance

Provide short descriptions for fields such as:

- Package Type
- Package Reference
- Owner
- Location
- Pack Date

This will help users understand what information is required when creating and managing packages.

## 9. Conclusion

The Packages workflow provides a foundation for registering packages and accessing related transfer operations. However, the inability to add contents through the New Package form is a significant usability limitation.

The main improvements should focus on enabling package content entry, clarifying package transfers, and providing better guidance for package-related fields.
