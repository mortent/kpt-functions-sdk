
/**
 * CODE GENERATED BY 'typgen' BINARY.
 *
 * DO NOT EDIT.
 */

import { KubernetesObject } from 'kpt-functions';
import * as apiCoreV1 from './io.k8s.api.core.v1';
import * as apisMetaV1 from './io.k8s.apimachinery.pkg.apis.meta.v1';
import * as pkgUtilIntstr from './io.k8s.apimachinery.pkg.util.intstr';

// HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.
export class HTTPIngressPath {
  // Backend defines the referenced service endpoint to which the traffic will be forwarded to.
  public backend: IngressBackend;

  // Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched.
  public path?: string;

  // PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
  //   done on a path element by element basis. A path element refers is the
  //   list of labels in the path split by the '/' separator. A request is a
  //   match for path p if every p is an element-wise prefix of p of the
  //   request path. Note that if the last element of the path is a substring
  //   of the last element in request path, it is not a match (e.g. /foo/bar
  //   matches /foo/bar/baz, but does not match /foo/barbaz).
  // * ImplementationSpecific: Interpretation of the Path matching is up to
  //   the IngressClass. Implementations can treat this as a separate PathType
  //   or treat it identically to Prefix or Exact path types.
  // Implementations are required to support all path types. Defaults to ImplementationSpecific.
  public pathType?: string;

  constructor(desc: HTTPIngressPath) {
    this.backend = desc.backend;
    this.path = desc.path;
    this.pathType = desc.pathType;
  }
}

// HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
export class HTTPIngressRuleValue {
  // A collection of paths that map requests to backends.
  public paths: HTTPIngressPath[];

  constructor(desc: HTTPIngressRuleValue) {
    this.paths = desc.paths;
  }
}

// Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
export class Ingress implements KubernetesObject {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata: apisMetaV1.ObjectMeta;

  // Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  public spec?: IngressSpec;

  // Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  public status?: IngressStatus;

  constructor(desc: Ingress.Interface) {
    this.apiVersion = Ingress.apiVersion;
    this.kind = Ingress.kind;
    this.metadata = desc.metadata;
    this.spec = desc.spec;
    this.status = desc.status;
  }
}

export function isIngress(o: any): o is Ingress {
  return o && o.apiVersion === Ingress.apiVersion && o.kind === Ingress.kind;
}

export namespace Ingress {
  export const apiVersion = "networking.k8s.io/v1beta1";
  export const group = "networking.k8s.io";
  export const version = "v1beta1";
  export const kind = "Ingress";

  // named constructs a Ingress with metadata.name set to name.
  export function named(name: string): Ingress {
    return new Ingress({metadata: {name}});
  }
  // Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
  export interface Interface {
    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata: apisMetaV1.ObjectMeta;

    // Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
    spec?: IngressSpec;

    // Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
    status?: IngressStatus;
  }
}

// IngressBackend describes all endpoints for a given service and port.
export class IngressBackend {
  // Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, serviceName and servicePort must not be specified.
  public resource?: apiCoreV1.TypedLocalObjectReference;

  // Specifies the name of the referenced service.
  public serviceName?: string;

  // Specifies the port of the referenced service.
  public servicePort?: pkgUtilIntstr.IntOrString;
}

// IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
export class IngressClass implements KubernetesObject {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata: apisMetaV1.ObjectMeta;

  // Spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  public spec?: IngressClassSpec;

  constructor(desc: IngressClass.Interface) {
    this.apiVersion = IngressClass.apiVersion;
    this.kind = IngressClass.kind;
    this.metadata = desc.metadata;
    this.spec = desc.spec;
  }
}

export function isIngressClass(o: any): o is IngressClass {
  return o && o.apiVersion === IngressClass.apiVersion && o.kind === IngressClass.kind;
}

export namespace IngressClass {
  export const apiVersion = "networking.k8s.io/v1beta1";
  export const group = "networking.k8s.io";
  export const version = "v1beta1";
  export const kind = "IngressClass";

  // named constructs a IngressClass with metadata.name set to name.
  export function named(name: string): IngressClass {
    return new IngressClass({metadata: {name}});
  }
  // IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
  export interface Interface {
    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata: apisMetaV1.ObjectMeta;

    // Spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
    spec?: IngressClassSpec;
  }
}

// IngressClassList is a collection of IngressClasses.
export class IngressClassList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Items is the list of IngressClasses.
  public items: IngressClass[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard list metadata.
  public metadata?: apisMetaV1.ListMeta;

  constructor(desc: IngressClassList) {
    this.apiVersion = IngressClassList.apiVersion;
    this.items = desc.items.map((i) => new IngressClass(i));
    this.kind = IngressClassList.kind;
    this.metadata = desc.metadata;
  }
}

export function isIngressClassList(o: any): o is IngressClassList {
  return o && o.apiVersion === IngressClassList.apiVersion && o.kind === IngressClassList.kind;
}

export namespace IngressClassList {
  export const apiVersion = "networking.k8s.io/v1beta1";
  export const group = "networking.k8s.io";
  export const version = "v1beta1";
  export const kind = "IngressClassList";

  // IngressClassList is a collection of IngressClasses.
  export interface Interface {
    // Items is the list of IngressClasses.
    items: IngressClass[];

    // Standard list metadata.
    metadata?: apisMetaV1.ListMeta;
  }
}

// IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.
export class IngressClassParametersReference {
  // APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  public apiGroup?: string;

  // Kind is the type of resource being referenced.
  public kind: string;

  // Name is the name of resource being referenced.
  public name: string;

  // Namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".
  public namespace?: string;

  // Scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace". Field can be enabled with IngressClassNamespacedParams feature gate.
  public scope?: string;

  constructor(desc: IngressClassParametersReference) {
    this.apiGroup = desc.apiGroup;
    this.kind = desc.kind;
    this.name = desc.name;
    this.namespace = desc.namespace;
    this.scope = desc.scope;
  }
}

// IngressClassSpec provides information about the class of an Ingress.
export class IngressClassSpec {
  // Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
  public controller?: string;

  // Parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
  public parameters?: IngressClassParametersReference;
}

// IngressList is a collection of Ingress.
export class IngressList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Items is the list of Ingress.
  public items: Ingress[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata?: apisMetaV1.ListMeta;

  constructor(desc: IngressList) {
    this.apiVersion = IngressList.apiVersion;
    this.items = desc.items.map((i) => new Ingress(i));
    this.kind = IngressList.kind;
    this.metadata = desc.metadata;
  }
}

export function isIngressList(o: any): o is IngressList {
  return o && o.apiVersion === IngressList.apiVersion && o.kind === IngressList.kind;
}

export namespace IngressList {
  export const apiVersion = "networking.k8s.io/v1beta1";
  export const group = "networking.k8s.io";
  export const version = "v1beta1";
  export const kind = "IngressList";

  // IngressList is a collection of Ingress.
  export interface Interface {
    // Items is the list of Ingress.
    items: Ingress[];

    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata?: apisMetaV1.ListMeta;
  }
}

// IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
export class IngressRule {
  // Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
  //    the IP in the Spec of the parent Ingress.
  // 2. The `:` delimiter is not respected because ports are not allowed.
  // 	  Currently the port of an Ingress is implicitly :80 for http and
  // 	  :443 for https.
  // Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
  // 
  // Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  public host?: string;

  public http?: HTTPIngressRuleValue;
}

// IngressSpec describes the Ingress the user wishes to exist.
export class IngressSpec {
  // A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
  public backend?: IngressBackend;

  // IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
  public ingressClassName?: string;

  // A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
  public rules?: IngressRule[];

  // TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
  public tls?: IngressTLS[];
}

// IngressStatus describe the current state of the Ingress.
export class IngressStatus {
  // LoadBalancer contains the current status of the load-balancer.
  public loadBalancer?: apiCoreV1.LoadBalancerStatus;
}

// IngressTLS describes the transport layer security associated with an Ingress.
export class IngressTLS {
  // Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  public hosts?: string[];

  // SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
  public secretName?: string;
}