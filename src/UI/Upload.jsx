import React from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { CsvToHtmlTable } from "react-csv-to-table";
import Menuicon from "./Menuicon";

const Upload =()=>{
    const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const [csvFile, setCsvFile] = useState();
  const [csvData, setCsvData] = useState();
  const [message, setMessage] = useState("Currently No Message to Show");
  const [valid, setValid] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputFile = (e) => {
    setCsvFile(e.target.files[0]);
    const fileName = e.target.files[0].name;
    const fileExt = fileName.split(".")[1];
    if (!["csv", "xls", "xlsx"].includes(fileExt)) {
      setMessage("Please Enter a Valid CSV file");
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (csvFile) {
      convertCSVtoText();
    }
  };

  const handleReset = () => {
    setCsvFile(null);
    setCsvData();
    setValid(true);
    setMessage("Please Choose a New CSV File");
  };

  console.log(csvData)

  const convertCSVtoText = () => {
    const clonedCsvFile = csvFile;

    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      setCsvData(text);
    };
    reader.readAsText(clonedCsvFile);
  };

    return(
        <main className="flex flex-col w-full h-full">
            <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
            <div className="flex items-center justify-center">
            <div className=" absolute left-0">
            {isSidebarOpen && <Sidebar/>}
            </div>  
            <div className="absolute left-0 invisible md:visible">
              <Sidebar/>
            </div>
                <form className="flex items-center w-1/2 justify-center h-screen">
                    <div className="flex flex-col justify-center w-full h-3/5 m-auto border border-slate-100 shadow-xl items-center p-6 gap-4">
                        <div className="flex flex-col w-full h-5/6 bg-white rounded-md shadow-md m-auto justify-center items-center border border-black border-dashed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                                <g clip-path="url(#clip0_22_2725)">
                                <path d="M18.7801 13.2998L6.95557 11.1998V26.7167C6.95557 27.4253 7.52638 27.9998 8.23053 27.9998H28.6341C29.3382 27.9998 29.9091 27.4253 29.9091 26.7167V20.9998L18.7801 13.2998Z" fill="#185C37"/>
                                <path d="M18.7802 0H8.23059C7.52644 0 6.95563 0.57446 6.95563 1.2831V7L18.7802 14L25.0402 16.1L29.9091 14V7L18.7802 0Z" fill="#21A366"/>
                                <path d="M6.95563 7H18.7802V14H6.95563V7Z" fill="#107C41"/>
                                <path opacity="0.1" d="M15.4185 5.60049H6.95557V23.1005H15.4185C16.1216 23.0982 16.6911 22.5251 16.6934 21.8174V6.88359C16.6911 6.17591 16.1216 5.60279 15.4185 5.60049Z" fill="black"/>
                                <path opacity="0.2" d="M14.7229 6.30025H6.95557V23.8002H14.7229C15.4261 23.7979 15.9956 23.2248 15.9978 22.5171V7.58334C15.9956 6.87567 15.4261 6.30255 14.7229 6.30025Z" fill="black"/>
                                <path opacity="0.2" d="M14.7229 6.30025H6.95557V22.4002H14.7229C15.4261 22.3979 15.9956 21.8248 15.9978 21.1172V7.58334C15.9956 6.87567 15.4261 6.30255 14.7229 6.30025Z" fill="black"/>
                                <path opacity="0.2" d="M14.0273 6.30025H6.95557V22.4002H14.0273C14.7305 22.3979 15.3 21.8248 15.3023 21.1172V7.58334C15.3 6.87567 14.7305 6.30255 14.0273 6.30025Z" fill="black"/>
                                <path d="M1.27496 6.30025H14.0274C14.7315 6.30025 15.3023 6.87471 15.3023 7.58334V20.4171C15.3023 21.1258 14.7315 21.7002 14.0274 21.7002H1.27496C0.570817 21.7002 0 21.1258 0 20.4171V7.58334C0 6.87471 0.570817 6.30025 1.27496 6.30025Z" fill="url(#paint0_linear_22_2725)"/>
                                <path d="M3.94867 18.1706L6.63075 13.9881L4.17334 9.82869H6.15011L7.49115 12.4887C7.61497 12.7414 7.69982 12.929 7.74574 13.0529H7.76312C7.85123 12.8513 7.94397 12.6555 8.04135 12.4656L9.47489 9.8301H11.2896L8.76959 13.965L11.3536 18.1706H9.42274L7.87372 15.2509C7.80075 15.1267 7.73884 14.9962 7.68871 14.861H7.66576C7.62038 14.9934 7.56018 15.1203 7.4863 15.239L5.89138 18.1706H3.94867Z" fill="white"/>
                                <path d="M28.6342 0H18.7802V7H29.9091V1.2831C29.9091 0.57446 29.3383 0 28.6342 0Z" fill="#33C481"/>
                                <path d="M18.7802 14H29.9091V21H18.7802V14Z" fill="#107C41"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_22_2725" x1="2.65832" y1="5.29766" x2="12.7396" y2="22.6473" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#18884F"/>
                                <stop offset="0.5" stop-color="#117E43"/>
                                <stop offset="1" stop-color="#0B6631"/>
                                </linearGradient>
                                <clipPath id="clip0_22_2725">
                                <rect width="29.9091" height="28" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg> 
                            <div>
                            <label>
                                <input type="file" onChange={handleInputFile} hidden/>
                                {!csvFile ? (<span> Drop Your Excel Sheet here  Or <span className="text-blue-500"><a href ="#"></a>browse</span></span>):(<span>{csvFile.name}</span>) }
                            </label>
                            </div>
                            {
                              csvFile &&
                              (
                                <div>
                                  <button className="text-red-500 m-4">Remove</button>
                                </div>
                              )
                            }
                        </div>
                        <button className="bg-logocolor text-white flex w-full justify-center rounded-md p-3 gap-2" onClick={handleSubmit}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Upload</span>
                        </button>
                    </div>
                </form>
                {csvFile && (<div className="absolute top-full left-11 md:left-72 flex flex-col items-center">
                <h5>Uploads</h5>
                <div className="bg-tablebg p-6">
                  <CsvToHtmlTable
                    data={csvData}
                    csvDelimiter=","
                    hasHeader="true"
                    // tableClassName=" border border-black bg-slate-100 text-2xl table-auto"
                    // tableRowClassName= 'm-6 bg-white p-6'
                    // tableColumnName='p-6'
                    tableClassName="table-fixed border-collapse p-6"
                    tableRowClassName="border-collapse bg-white p-6 gap-4 mb-4"
                    tableColumnClassName=" border-collapse  p-2"
                  />
                </div>
                </div>)}
            </div>
        </main>
    );
}
export default Upload;