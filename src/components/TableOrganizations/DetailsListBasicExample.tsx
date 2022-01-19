import * as React from "react";
import { ITextFieldStyles } from "@fluentui/react/lib/TextField";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { MarqueeSelection } from "@fluentui/react/lib/MarqueeSelection";
import { mergeStyles } from "@fluentui/react/lib/Styling";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
});

const textFieldStyles: Partial<ITextFieldStyles> = {
  root: { maxWidth: "300px" },
};

interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;

}

interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

class DetailsListBasicExample extends React.Component<
  {},
  IDetailsListBasicExampleState
> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);


   this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    this._allItems = [];
    for (let i = 1; i <= 10; i++) {
      this._allItems.push({
        key: i,
        name: "Organização " + i,
        value: i,
      });
    }

    this._columns = [
      {
        key: "column1",
        name: "Name",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
    ];

        this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };

  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
    );
  }

private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
      default:
        return `${selectionCount} items selected`;
    }
  }

    private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };
}

export default DetailsListBasicExample