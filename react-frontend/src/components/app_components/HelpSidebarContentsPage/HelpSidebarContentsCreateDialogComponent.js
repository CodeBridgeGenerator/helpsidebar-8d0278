import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const HelpSidebarContentsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.serviceNames)) {
                error["serviceNames"] = `Service Names field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.purpose)) {
                error["purpose"] = `Purpose field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.path)) {
                error["path"] = `Path field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.features)) {
                error["features"] = `Features field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.guide)) {
                error["guide"] = `Guide field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.content)) {
                error["content"] = `Content field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            serviceNames: _entity?.serviceNames,purpose: _entity?.purpose,path: _entity?.path,features: _entity?.features,guide: _entity?.guide,content: _entity?.content,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("helpSidebarContents").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info HelpSidebarContents created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in HelpSidebarContents" });
        }
        setLoading(false);
    };

    

    

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create HelpSidebarContents" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="helpSidebarContents-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="serviceNames">Service Names:</label>
                <InputText id="serviceNames" className="w-full mb-3 p-inputtext-sm" value={_entity?.serviceNames} onChange={(e) => setValByKey("serviceNames", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["serviceNames"]) ? (
              <p className="m-0" key="error-serviceNames">
                {error["serviceNames"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="purpose">Purpose:</label>
                <InputText id="purpose" className="w-full mb-3 p-inputtext-sm" value={_entity?.purpose} onChange={(e) => setValByKey("purpose", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["purpose"]) ? (
              <p className="m-0" key="error-purpose">
                {error["purpose"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="path">Path:</label>
                <InputText id="path" className="w-full mb-3 p-inputtext-sm" value={_entity?.path} onChange={(e) => setValByKey("path", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["path"]) ? (
              <p className="m-0" key="error-path">
                {error["path"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="features">Features:</label>
                <InputText id="features" className="w-full mb-3 p-inputtext-sm" value={_entity?.features} onChange={(e) => setValByKey("features", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["features"]) ? (
              <p className="m-0" key="error-features">
                {error["features"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="guide">Guide:</label>
                <InputText id="guide" className="w-full mb-3 p-inputtext-sm" value={_entity?.guide} onChange={(e) => setValByKey("guide", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["guide"]) ? (
              <p className="m-0" key="error-guide">
                {error["guide"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="content">Content:</label>
                <InputText id="content" className="w-full mb-3 p-inputtext-sm" value={_entity?.content} onChange={(e) => setValByKey("content", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["content"]) ? (
              <p className="m-0" key="error-content">
                {error["content"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(HelpSidebarContentsCreateDialogComponent);
