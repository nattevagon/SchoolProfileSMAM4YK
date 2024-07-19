// OrgChart.js
import React from 'react';
import './orgChart.scss';

const OrgChartNode = ({ node }) => {
    return (
        <div className="org-chart-node">
            <div className="org-chart-node-content">
                <strong>{node.name}</strong>
                <br />
                <span>{node.title}</span>
            </div>
            {node.children && (
                <div className="org-chart-children">
                    {node.children.map((child, index) => (
                        <OrgChartNode key={index} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const OrgChart = ({ data }) => {
    return (
        <div className="org-chart">
            <OrgChartNode node={data} />
        </div>
    );
};

export default OrgChart;