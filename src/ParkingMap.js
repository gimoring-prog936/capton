import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import "./Park.css";

export default class App extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected(`좌석번호 ${number}, 열 ${row}, 자리id ${id}`);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    removeCb(row, number, newTooltip);
  };

  render() {
    const rows = [
    
      [
        { id: 1, number: "B1", isSelected: true },
        { id: 2, number: "B2", tooltip: "" },
        null,
        {
          id: 3,
          number: "B3",
          isReserved: false,
          tooltip: "62구 3456"
        },
        { id: 4, number: "B4"  },
        { id: 5, number: "B5" },
        { id: 6, number: "B6" }, 
        { id: 7, number: "B7", isReserved: false},
        { id: 8, number: "B8", isReserved: false },
        { id: 9, number: "B9", isReserved: false},
        null,
        { id: 10, number: "B10" },
        { id: 11, number: "B11" },
        { id: 12, number: "B12" },
        { id: 13, number: "B13" },
        { id: 14, number: "B14" },
        null,
        { id: 15, number: "B15" },
        { id: 16, number: "B16"}

      ],
      [],
      [],
      [],
      [
        null,
        null,
        null,
        { id: 17, number: "B17" },
        { id: 18, number: "B18" },
        { id: 19, number: "B19"},
        { id: 20, number: "B20"},
        { id: 21, number: "B21"},
        { id: 22, number: "B22"},
        { id: 23, number: "B23"},
        { id: 24, number: "B24"},
        { id: 25, number: "B25"},
        { id: 26, number: "B26"},
        { id: 27, number: "B27"},
        { id: 28, number: "B28"},
        { id: 29, number: "B29"},

      ],
      [
        null,
        null,
        null,
        { id: 30, number: "A15", isReserved: true },
        { id: 31, number: "A16" },
        { id: 32, number: "A17" },
        { id: 33, number: "A18"},
        { id: 34, number: "A19"},
        { id: 35, number: "A20"},
        { id: 36, number: "A21"},
        { id: 37, number: "A22"},
        { id: 38, number: "A23"},
        { id: 39, number: "A24"},
        { id: 40, number: "A25"},
        { id: 41, number: "A26"},
        { id: 42, number: "A27"}
      ],
      [],
      [],
      [],
      [
        { id: 43, number: "출구", isReserved: true },
        { id: 44, number: "입구", isReserved: true },
        null,       
        { id: 45, number: "A1"  },
        { id: 46, number: "A2"  },
        { id: 47, number: "A3" },
        { id: 48, number: "A4" }, 
        { id: 49, number: "A5", isReserved: false},
        { id: 50, number: "A6", isReserved: false },
        { id: 51, number: "A7", isReserved: false},
        null,
        { id: 10, number: "A8" },
        { id: 11, number: "A9" },
        { id: 12, number: "A10" },
        { id: 13, number: "A11" },
        { id: 14, number: "A12" },
        null,
        { id: 15, number: "A13" },
        { id: 16, number: "A14"},

      ]
    ];
    return (
      <div>
        <h1>동문주차장</h1>
        <div style={{ marginTop: "10px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={rows}
            maxReservableSeats={3}
            alpha
            
            selectedByDefault
            loading={false}
            tooltipProps={{ multiline: true }}
            rowProps={{ style: { display: "none" } }} // 행 이름 열을 숨김
          />
        </div>
        
      </div>
    );
  }
}