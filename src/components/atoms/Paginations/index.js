import React from "react";
import "./paginations.scss";
import { ChevronReguler } from "assets";

export default function Paginations(props) {
    const { maxData, listCount, pageData, onClickPage } = props;

    const pageCount = Math.ceil(listCount / maxData);

    const renderPages = () => {
        let pages = [];
        let startPage = 1;
        let endPage = pageCount;

        if (pageCount > 3) {
            // Define page range around the current page
            startPage = Math.max(pageData - 1, 1);
            endPage = Math.min(pageData + 1, pageCount);

            // Adjust startPage and endPage if they are too close to the edges
            if (pageData <= 2) {
                endPage = Math.min(3, pageCount);
            }
            if (pageData >= pageCount - 1) {
                startPage = Math.max(pageCount - 2, 1);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <div
                    key={i}
                    className={"btn-item no-select" + (i === pageData ? " active" : "")}
                    onClick={() => onClickPage(i)}
                >
                    {i}
                </div>
            );
        }

        if (startPage > 1) {
            pages.unshift(
                <div
                    key="ellipsis-start"
                    className="ellipsis no-select"
                >
                    ...
                </div>
            );
        }

        if (endPage < pageCount) {
            pages.push(
                <div
                    key="ellipsis-end"
                    className="ellipsis no-select"
                >
                    ...
                </div>
            );
        }

        return pages;
    };

    const handlePrevClick = () => {
        if (pageData > 1) {
            onClickPage(pageData - 1);
        }
    };

    const handleNextClick = () => {
        if (pageData < pageCount) {
            onClickPage(pageData + 1);
        }
    };

    return (
        <div className="paginations">
            <div
                className={"btn-prev no-select" + (pageData === 1 ? " disabled" : "")}
                onClick={handlePrevClick}
            >
                <img className="chevron" src={ChevronReguler} alt="Chevron" />
            </div>
            {renderPages()}
            <div
                className={"btn-next no-select" + (pageData === pageCount ? " disabled" : "")}
                onClick={handleNextClick}
            >
                <img className="chevron" src={ChevronReguler} alt="Chevron" />
            </div>
        </div>
    );
}