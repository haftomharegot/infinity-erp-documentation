# Stock Bin Cards – Findings and Recommendations

## 1. Current System Functionality and Findings

### 1.1 Stock Bin Cards List

The Stock Bin Cards workflow provides a list of generated stock bin card records. Each record represents a product and storage location over a defined reporting period.

The list displays the following information:

| Field           | Description                                              |
| --------------- | -------------------------------------------------------- |
| Name            | Name assigned to the stock bin card.                     |
| Product         | Product covered by the bin card.                         |
| Bin / Location  | Storage location covered by the card.                    |
| Date From       | Beginning of the reporting period.                       |
| Date To         | End of the reporting period.                             |
| Opening Balance | Stock quantity at the beginning of the reporting period. |
| Closing Balance | Stock quantity at the end of the reporting period.       |
| Generated At    | Date and time the bin card was generated.                |

### 1.2 Search and Organization

The workflow provides standard record-search and organization options:

**Filters**

- Add Custom Filter.

**Group By**

- Product Location.
- Add Custom Group.

**Favorites**

- Save current search.

These options help users organize and retrieve bin card records according to their operational requirements.

### 1.3 Creating and Managing Stock Bin Cards

A new stock bin card can be created by providing the following information:

| Field          | Description                                             |
| -------------- | ------------------------------------------------------- |
| Name           | Identifies the stock bin card.                          |
| Product        | Product whose stock movements will be tracked.          |
| Bin / Location | Storage location whose stock movements will be tracked. |
| Company        | Company associated with the record.                     |
| Date From      | Starting date of the reporting period.                  |
| Date To        | Ending date of the reporting period.                    |

Product, Bin / Location, Date From, and Date To are required before generating a bin card.

The same record can be opened and its information reviewed or edited.

### 1.4 Balance Summary

The bin card provides two summary fields:

- **Opening Balance:** Represents the stock quantity at the beginning of the selected reporting period.
- **Closing Balance:** Represents the stock quantity remaining at the end of the selected reporting period.

These fields provide an overview of the stock position without requiring users to examine every individual movement.

### 1.5 Stock Movement History(Details)

The Movements section displays the transactions associated with the selected product and storage location.

The movement table contains:

| Field                | Description                                        |
| -------------------- | -------------------------------------------------- |
| Date                 | Date and time of the stock movement.               |
| Reference            | Reference identifying the related transaction.     |
| Picking              | Related inventory operation or transfer reference. |
| Source Location      | Location from which the stock originated.          |
| Destination Location | Location to which the stock was moved.             |
| Received             | Quantity received into the selected location.      |
| Issued               | Quantity issued from the selected location.        |
| Balance              | Remaining stock quantity after the movement.       |
| UoM                  | Unit of measure used for the quantity.             |

The table provides a chronological view of stock movements and their effect on the available quantity.

### 1.6 Generating a Bin Card

The Generate Bin Card action is available on the record. It generates the movement information based on the selected product, location, and reporting period.

The generated record includes the movement history, balance summary, generation date, and the user responsible for generating it.

Changing the reporting dates updates the existing record rather than requiring a separate record for every reporting period.

### 1.7 Findings

The current workflow provides the essential structure of a stock bin card by combining product and location identification, a reporting period, a balance summary, and a chronological stock movement table.

1. **Limited movement visibility:** The workflow primarily presents movement records within a generated card. Users may benefit from more flexible ways to review and narrow down the movement history.
2. **Balance interpretation:** Although opening, running, and closing balances are provided, their relationship should be clearly understandable and consistent throughout the card.
3. **Reporting flexibility:** The reporting period is defined manually for each card. More convenient period selection and reporting options could improve usability.
4. **Record organization:** As the number of bin cards increases, users need convenient ways to identify and access records for particular products and locations.
5. **Reporting and documentation:** A stock bin card is often used as an operational and audit reference, making readable printing and export important capabilities.

## 2. Recommendations

### 2.1 Improve Balance Presentation and Reconciliation

Present the opening balance, received quantity, issued quantity, and closing balance in a clearly connected structure.

The balance should follow this calculation:

**Closing Balance = Opening Balance + Total Received − Total Issued**

The running balance should be recalculated after each movement and should agree with the final closing balance.

This makes the card easier to understand and supports inventory reconciliation.

### 2.2 Improve Movement History Presentation

Organize movements chronologically, with the earliest movement appearing first and the latest appearing last.

Provide clear identification of the related inventory operation and distinguish between stock received and stock issued.

Where appropriate, allow users to open the related transaction directly from its reference. This would make it easier to investigate individual movements without leaving the bin card's context.

### 2.3 Provide Flexible Reporting Periods

Offer convenient reporting-period options, such as:

- Today.
- This Week.
- This Month.
- This Year.
- Custom Period.

Allow users to select custom start and end dates when a predefined period does not meet their requirements.

When the reporting period changes, the existing card should be regenerated or refreshed using the new dates, with the latest generation information retained.

### 2.4 Improve Search and Filtering

Provide useful filters for locating bin cards, including:

- Product.
- Storage Location.
- Company.
- Reporting Period.
- Generation Date.

Allow users to group records by product, location, and company.

This would make the workflow more practical when managing large numbers of products and storage locations.

### 2.5 Improve Stock Bin Card Reporting

Provide a clean, printable stock bin card report containing:

- Company and storage location information.
- Product identification.
- Reporting period.
- Opening balance.
- Chronological movement history.
- Total received quantity.
- Total issued quantity.
- Closing balance.

The report should also support export to common formats such as PDF and Excel.

This would allow inventory personnel to use the bin card for physical stock verification, reporting, and auditing.

### 2.6 Improve Historical Traceability

Maintain generation information, including the user and date of generation.

Where a card is regenerated, retain an appropriate generation history so users can identify when the report was refreshed and which reporting period and information it represented.

This improves accountability and makes previously generated stock reports easier to trace.
