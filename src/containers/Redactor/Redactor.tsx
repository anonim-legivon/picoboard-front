import * as React from "react";

import bold from "./assets/bold.png";
import italic from "./assets/italic.png";
import overline from "./assets/overline.png";
import quote from "./assets/quote1.png";
import spoiler from "./assets/spoiler.png";
import strike from "./assets/strike.png";
import sub from "./assets/sub.png";
import sup from "./assets/sup.png";
import underline from "./assets/underline.png";
import "./Redactor.css";

const tags = {
  bold: ["[b]", "[/b]"],
  crossed: ["[s]", "[/s]"],
  cursive: ["[i]", "[/i]"],
  overline: ["[o]", "[/o]"],
  quoute: [">"],
  spoiler: ["[spoiler]", "[/spoiler]"],
  sub: ["[sub]", "[/sub]"],
  sup: ["[sup]", "[/sup]"],
  underline: ["[u]", "[/u]"]
};
// const tagsDeparted = {

// }

interface IRedactorState {
  textareaValue: string;
  textareaDeparted: string;
  name: string;
  options: string;
  theme: string;
}
enum inputTypes {
  NAME,
  THEME,
  OPTIONS
}
export class Redactor extends React.Component<{}, IRedactorState> {
  private redactorField = React.createRef<HTMLTextAreaElement>();
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      options: "",
      textareaDeparted: "",
      textareaValue: "",
      theme: ""
    };
  }

  public render() {
    return (
      <div className="redactor-wrapper">
        <div className="redactor__input-group">
          <input
            placeholder="опции"
            onChange={e => this.changeFieldsHandler(e, inputTypes.OPTIONS)}
            type="text"
            className="redactor__options-input"
          />
          <input
            placeholder="имя"
            onChange={e => this.changeFieldsHandler(e, inputTypes.NAME)}
            type="text"
            className="redactor__name-input"
          />
          <button className="readactor__button">Отправить</button>
        </div>
        <input
          placeholder="тема"
          onChange={e => this.changeFieldsHandler(e, inputTypes.THEME)}
          type="text"
          className="redactor__theme-input"
        />
        <div className="redactor">
          <textarea
            placeholder="Комментарий. Макс. длина 15000"
            value={this.state.textareaValue}
            className="redactor__main-field"
            ref={this.redactorField}
            onChange={this.textareaChangeHandler}
          />
          <div className="style-buttons">
            <button onClick={() => this.textStylingHandler("bold")} className="style-button">
              <img src={bold} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("crossed")} className="style-button">
              <img src={strike} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("cursive")} className="style-button">
              <img src={italic} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("overline")} className="style-button">
              <img src={overline} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("quote")} className="style-button">
              <img src={quote} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("spoiler")} className="style-button">
              <img src={spoiler} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("underline")} className="style-button">
              <img src={underline} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("sup")} className="style-button">
              <img src={sup} alt="" />
            </button>
            <button onClick={() => this.textStylingHandler("sub")} className="style-button">
              <img src={sub} alt="" />
            </button>
            <div className="redactor__options">
              <div className="option-box">
                <input type="checkbox" id="saga" />
                <label htmlFor="saga">Saga</label>
              </div>
              <div className="option-box">
                <input type="checkbox" id="marka" />
                <label htmlFor="marka">Ватемарка</label>
              </div>
              <div className="option-box">
                <input type="checkbox" id="op" />
                <label htmlFor="op">ОП Треда</label>
              </div>
            </div>
            <div className="redactor__limits">Макс объем: 40Mб, макс кол-во файлов: 4</div>
            <div className="dropbox">КЛИКНИ/БРОСЬ ФАЙЛ/CTRL-V</div>
          </div>
        </div>
      </div>
    );
  }
  private changeFieldsHandler = (event: React.ChangeEvent<HTMLInputElement>, type: inputTypes) => {
    switch (type) {
      case inputTypes.NAME: {
        this.setState({ name: event.target.value });
      }
      case inputTypes.OPTIONS: {
        this.setState({ options: event.target.value });
      }
      case inputTypes.THEME: {
        this.setState({ theme: event.target.value });
      }
    }
  };
  private textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ textareaValue: event.target.value });
  private textStylingHandler = (type: string) => {
    const redactorField = this.redactorField.current;

    if (redactorField) {
      const selStart = redactorField.selectionStart;

      const selEnd = redactorField.selectionEnd;

      const selectedText = redactorField.value.substring(selStart, selEnd);

      const stringBefore = redactorField.value.substring(0, selStart);

      const stringAfter = redactorField.value.substring(selEnd);

      let taggedText;
      switch (type) {
        case "bold": {
          taggedText = tags.bold[0] + selectedText + tags.bold[1];
          break;
        }
        case "crossed": {
          taggedText = tags.crossed[0] + selectedText + tags.crossed[1];
          break;
        }
        case "cursive": {
          taggedText = tags.cursive[0] + selectedText + tags.cursive[1];
          break;
        }
        case "overline": {
          taggedText = tags.overline[0] + selectedText + tags.overline[1];
          break;
        }
        case "quote": {
          taggedText = tags.quoute[0] + selectedText;
          break;
        }
        case "spoiler": {
          taggedText = tags.spoiler[0] + selectedText + tags.spoiler[1];
          break;
        }
        case "sup": {
          taggedText = tags.sup[0] + selectedText + tags.sup[1];
          break;
        }
        case "sub": {
          taggedText = tags.sub[0] + selectedText + tags.sub[1];
          break;
        }
        case "underline": {
          taggedText = tags.underline[0] + selectedText + tags.underline[1];
          break;
        }
      }
      this.setState({ textareaValue: stringBefore + taggedText + stringAfter });
    }
  };
}
