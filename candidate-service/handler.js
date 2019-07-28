'use strict';

var AWS    = require('aws-sdk');
var uuid   = require('uuid');

module.exports.hello = async (event, context,) => {


    var AWS    = require('aws-sdk');
    var uuid   = require('uuid');

    var s3     = new AWS.S3();

    // var bucketName = 'node-sdk-sample-'+uuid.v4();
    var bucketName = 'igor-sdk-sample-2b23e975-d7c8-48c3-bcb3-cdfd9f778373';
    var keyName   = 'lambda.json';

    var objectParams  = {Bucket: bucketName, Key: keyName, Body: 'lambda test'};

    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'})
        .putObject(objectParams).promise();

    uploadPromise.then(function (data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    }).catch(function (err) {
        console.log('Error on uploadPromise');
        console.error(err,err.stack)
    });






    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
